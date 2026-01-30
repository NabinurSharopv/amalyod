import { Form, Input } from "antd";
import { useLoginMutation, useOnAuthGoogle } from "../../../../../hooks/useQueryAction";
import type { LoginType } from "../../../../../@types";
import googlePng from "../../../../../assets/img/google.png";
import facebookPng from "../../../../../assets/img/facebook.png";
import { Loader } from "lucide-react";
import { toast } from "react-hot-toast";
// import { signInWithGoogle } from "../../../../../firebase/config";
// import Cookies from "js-cookie";
// import { useReduxDispatch } from "../../../../../hooks/useRedux";
// import { getUser } from "../../../../../redux/user-slice";
// import { setAuthorizationModalVisibility } from "../../../../../redux/modal-store";

const Login = () => {
  const input_style = "h-[45px] mt-2 !border-[#46A358]";
  const icon_style =
    "border h-[45px] border-[#EAEAEA] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer hover:bg-gray-50 transition-all active:scale-95";

  const { mutate, isPending } = useLoginMutation();
  // const dispatch = useReduxDispatch(); // ✅ Dispatch qo'shildi

  const onAuth = (values: LoginType) => {
    mutate(values, {
      onSuccess: () => {    
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      onError: (err: any) => {
        const errorMsg =
          err?.response?.data?.message || "Login amalga oshmadi!";
        toast.error(errorMsg, { id: "login-error" });
      },
    });
  };

  // const googleLogin = async () => {
    
  //   try {
  //     console.log("2. signInWithGoogle chaqirilmoqda...");
  //     const result = await signInWithGoogle();
  //     console.log("3. Google login natijasi:", result);
      
  //     const user = result.user;
  //     const token = await user.getIdToken();
      
  //     console.log("4. User ma'lumotlari:", {
  //       uid: user.uid,
  //       email: user.email,
  //       name: user.displayName,
  //       photoURL: user.photoURL
  //     });
      
  //     // Redux state ga saqlash
  //     const userData = {
  //       _id: user.uid,
  //       name: user.displayName || user.email || "Google User",
  //       email: user.email,
  //       profile_photo: user.photoURL
  //     };
      
  //     dispatch(getUser(userData));
  //     console.log("5. Redux state ga saqlandi");
      
  //     // Cookie ga saqlash
  //     Cookies.set("token", token);
  //     Cookies.set("user", JSON.stringify(userData));
  //     console.log("6. Cookie ga saqlandi");
      
  //     // Modalni yopish
  //     dispatch(setAuthorizationModalVisibility());
  //     console.log("7. Modal yopildi");
      
  //     toast.success("Google bilan muvaffaqiyatli kirildi!");
      
  //   } catch (error: any) {
  //     console.error("8. Google login xatosi:", error);
  //     console.error("Error code:", error.code);
  //     console.error("Error message:", error.message);
      
  //     toast.error("Google login amalga oshmadi!");
  //   }
  // };

  const { mutate: mutateGoogle } = useOnAuthGoogle();
 return (
    <div className="w-[90%] m-auto">
      <div className="mt-5 mb-2">
        <p className="text-[#3D3D3D] text-[14px] mb-4">
          Enter your email and password to login.
        </p>

        <Form layout="vertical" onFinish={onAuth} requiredMark={false}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Emailni kiriting!" },
              { type: "email", message: "To'g'ri email kiriting!" },
            ]}
          >
            <Input
              placeholder="almamun_uxui@outlook.com"
              className={input_style}
              autoComplete="username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Parolni kiriting!" }]}
          >
            <Input.Password
              placeholder="***********"
              className={input_style}
              autoComplete="current-password"
            />
          </Form.Item>

          <p className="text-end mt-2 text-[#46A358] text-[14px] cursor-pointer hover:underline mb-4">
            Forgot Password?
          </p>

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#46A358] w-full mt-4 text-white h-10 rounded-md flex items-center justify-center disabled:opacity-70 transition-all active:scale-95 shadow-sm"
          >
            {isPending ? <Loader className="animate-spin" /> : "Login"}
          </button>
        </Form>

        <div className="flex items-center justify-center mt-8 mb-6 gap-4">
          <div className="flex-1 h-px bg-[#EAEAEA]"></div>
          <p className="text-[#3D3D3D] text-[13px] whitespace-nowrap">
            Or login with
          </p>
          <div className="flex-1 h-px bg-[#EAEAEA]"></div>
        </div>

        <div className={icon_style} onClick={() => mutateGoogle()}>
          <img
            src={googlePng}
            alt="google"
            className="w-5 h-5 object-contain"
          />
          <p className="text-[#727272] text-[14px] font-medium">
            Login with Google
          </p>
        </div>

        <div className={icon_style}>
          <img
            src={facebookPng}
            alt="facebook"
            className="w-5 h-5 object-contain"
          />
          <p className="text-[#727272] text-[14px] font-medium">
            Login with Facebook
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;