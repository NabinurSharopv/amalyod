import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyAdGDOd65VuCa6yLEUl_uHE8F4kSYGzLU8" ,
  authDomain: "green-shop-n101-c2adc.firebaseapp.com",
  projectId: "green-shop-n101-c2adc",
  storageBucket: "green-shop-n101-c2adc.firebasestorage.app",
  messagingSenderId: "378303536289",
  appId: "1:378303536289:web:5568ae838e97307b6aa4e0",
  measurementId: "G-275NDCLW89",
}; 

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};