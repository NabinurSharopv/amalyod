// src/hooks/useQueryAction/index.ts
import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../useAxios";
import { notificationApi } from "../../generic/notificationApi";
import Cookies from "js-cookie";
import { useReduxDispatch } from "../../hooks/useRedux"; 
import { setAuthorizationModalVisibility } from "../../redux/modal-store";
import { getUser } from "../../redux/user-slice";
import { signInWithGoogle } from "../../firebase/config"; 

export const useLoginMutation = () => {
  const notify = notificationApi();
  const axios = useAxios(); 
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ 
        url: "user/sign-in",
        method: "POST",
        body: data,
      }),
    onSuccess(responseData: any) {
      console.log("Login response:", responseData);  
      const serverData = responseData.data;
      const user = {
        _id: serverData._id,
        name: serverData.name,
        email: serverData.email,
        profile_photo: serverData.profile_photo
      };
      console.log("User object for Redux:", user); 
      notify("login");
      Cookies.set("token", serverData.token);
      Cookies.set("user", JSON.stringify(user));
      dispatch(getUser(user));
      dispatch(setAuthorizationModalVisibility());
    },
    onError(error: any) {
      console.error("Login error:", error);
      if (error.response?.status === 409) {
        notify("409");
      }
    },
  });
};

export const useRegisterMutation = () => {
  const notify = notificationApi();
  const request = useAxios(); 
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: object) =>
      request({ 
        url: "user/sign-up", 
        method: "POST", 
        body: data 
      }),
    onSuccess(data: any) {
      const { token, user } = data; 
      notify("login");

      Cookies.set("token", token, { expires: 7 });
      Cookies.set("user", JSON.stringify(user), { expires: 7 });

      dispatch(getUser(user)); 
      dispatch(setAuthorizationModalVisibility());
    },
    onError(error: any) { 
      if (error.response?.status === 409) {
        notify("409");
      }
    },
  });
};

export const useOnAuthGoogle = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  
  return useMutation({
    mutationKey: ["sign-in-google"],
    mutationFn: async () => {
      try {
        const firebaseResponse = await signInWithGoogle();
        console.log("Firebase Response:", firebaseResponse);
                const firebaseUser = firebaseResponse.user;
        console.log("Firebase User Details:", {
          email: firebaseUser.email,
          name: firebaseUser.displayName,
          photo: firebaseUser.photoURL,
          uid: firebaseUser.uid
        });
        const serverResponse = await axios({
          url: "user/sign-in/google",
          method: "POST",
          body: {
            email: firebaseUser.email,
            name: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            uid: firebaseUser.uid,
            providerId: 'google'
          }
        });
    
        console.log("Server Response:", serverResponse);
        return { serverResponse, firebaseUser };
        
      } catch (firebaseError: any) {
        console.error("Firebase authentication error:", firebaseError);
        throw new Error(`Firebase auth failed: ${firebaseError.message}`);
      }
    },
    onSuccess: (data: any) => {
      console.log("Full success data:", data);
      
      const { serverResponse, firebaseUser } = data;
      
      // BACKEND RESPONSE'NI TEKSHIRISH
      let serverData, token, backendUser;
      
      if (serverResponse && serverResponse.data) {
        serverData = serverResponse.data;
        token = serverData.token;
        backendUser = serverData.user;
        
        console.log("Backend response:", {
          hasToken: !!token,
          hasUser: !!backendUser,
          userNotEmpty: backendUser && Object.keys(backendUser).length > 0
        });
      }
      
      let finalUser;
      
      if (backendUser && Object.keys(backendUser).length > 0) {
        finalUser = {
          _id: backendUser._id,
          name: backendUser.name || firebaseUser.displayName,
          email: backendUser.email || firebaseUser.email,
          profile_photo: backendUser.profile_photo || backendUser.photoURL || firebaseUser.photoURL,
          uid: backendUser.uid || firebaseUser.uid
        };
        console.log("Using backend user data");
      } else {
        console.warn("Backend returned empty user, using Firebase data");
        finalUser = {
          _id: firebaseUser.uid, 
          name: firebaseUser.displayName || 'Google User',
          email: firebaseUser.email,
          profile_photo: firebaseUser.photoURL,
          uid: firebaseUser.uid,
          provider: 'google'
        };
                if (!token) {
          token = `firebase-${firebaseUser.uid}-${Date.now()}`;
          console.log("Generated temporary token:", token);
        }
      }
      
      console.log("Final user object:", finalUser);
            notify("login");
            if (token) {
        Cookies.set("token", token, { expires: 7 });
        console.log("Token saved to cookies");
      }
      
      Cookies.set("user", JSON.stringify(finalUser), { expires: 7 });
      console.log("User saved to cookies");
            dispatch(getUser(finalUser));
      console.log("User dispatched to Redux");
            dispatch(setAuthorizationModalVisibility());
      console.log("Modal visibility set to false");
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('authProvider', 'google');
      localStorage.setItem('userEmail', finalUser.email);
      
      console.log("Google login process COMPLETED SUCCESSFULLY");
      
    },
    onError: (error: any) => {
      console.error("Google authentication full error:", {
        message: error.message,
        response: error.response,
        stack: error.stack
      });
            if (error.response?.status === 409) {
        notify("409"); // Email allaqachon mavjud
      } else if (error.message?.includes('popup')) {
        notify("popup-closed");  
      } else {
        notify("error"); 
      }
    }
  });
};