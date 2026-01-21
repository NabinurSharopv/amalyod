import React, { useState } from "react";
import { Modal, Form, Input, message } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../../../redux/modal-store";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const AuthorizationModal = () => {
  const dispatch = useReduxDispatch();
  const [form] = Form.useForm();
  
  const [authType, setAuthType] = useState("login"); 

  const { authorizationModalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );

  const input_style = "h-[45px] rounded-md";
  const icon_style = "flex items-center justify-center gap-3 border border-[#EAEAEA] h-[40px] rounded-md cursor-pointer mb-3 hover:bg-gray-50 transition-all";

  const onFinish = (values: any) => {
    if (authType === "register") {
      if (values.password !== values.confirm_password) {
        return message.error("Passwords do not match!");
      }
      console.log("Registering:", values);
      message.success("Registered successfully!");
    } else {
      console.log("Logging in:", values);
      message.success("Siz muofaqiyatli ro'yxatdan o'tdingiz!");
    }
  };

  return (
    <Modal
      open={authorizationModalVisibility}
      onCancel={() => dispatch(setAuthorizationModalVisibility())}
      footer={null}
      centered
      destroyOnClose
    >
      <div className="w-[90%] m-auto py-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setAuthType("login")}
            className={`text-[20px] font-medium transition-all ${
              authType === "login" ? "text-[#46A358] border-b-2 border-[#46A358]" : "text-[#3D3D3D]"
            }`}
          >
            Login
          </button>
          <span className="text-[20px] text-[#3D3D3D]">|</span>
          <button
            onClick={() => setAuthType("register")}
            className={`text-[20px] font-medium transition-all ${
              authType === "register" ? "text-[#46A358] border-b-2 border-[#46A358]" : "text-[#3D3D3D]"
            }`}
          >
            Register
          </button>
        </div>

        <p className="text-[14px] text-gray-500 mb-4">
          {authType === "login" 
            ? "Enter your email and password to login." 
            : "Enter your email and password to register."}
        </p>
        
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {authType === "register" && (
            <>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your   !" }]}
              >
                <Input placeholder="First Name" className={input_style} />
              </Form.Item>

              <Form.Item
                name="surname"
                rules={[{ required: true, message: "Please input your surname!" }]}
              >
                <Input placeholder="Last Name" className={input_style} />
              </Form.Item>
            </>
          )}

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: 'email', message: "Please enter a valid email!" }
            ]}
          >
            <Input placeholder="Enter your email address" className={input_style} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" className={input_style} />
          </Form.Item>

          {authType === "register" && (
            <Form.Item
              name="confirm_password"
              rules={[{ required: true, message: "Please confirm your password!" }]}
            >
              <Input.Password placeholder="Confirm Password" className={input_style} />
            </Form.Item>
          )}

          {authType === "login" && (
            <div className="text-right mb-4">
              <a href="#" className="text-[#46A358] text-[14px]">Forgot Password?</a>
            </div>
          )}

          <button 
            type="submit"
            className="bg-[#46A358] w-full mt-4 text-white h-[45px] rounded-md font-bold hover:bg-[#3d8b4c] transition-all"
          >
            {authType === "login" ? "Login" : "Register"}
          </button>
        </Form>

        <div className="flex items-center justify-center mt-6 mb-6 gap-4">
          <div className="flex-1 h-[1px] bg-[#EAEAEA]"></div>
          <p className="text-[#3D3D3D] text-[13px] whitespace-nowrap">
            Or {authType === "login" ? "login" : "register"} with
          </p>
          <div className="flex-1 h-[1px] bg-[#EAEAEA]"></div>
        </div>

        <div className={icon_style}>
          <FcGoogle size={20} />
          <p className="text-[14px] font-medium text-[#727272]">
             {authType === "login" ? "Login" : "Register"} with Google
          </p>
        </div>

        <div className={icon_style}>
          <FaFacebook size={20} className="text-[#3b5998]" />
          <p className="text-[14px] font-medium text-[#727272]">
             {authType === "login" ? "Login" : "Register"} with Facebook
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default AuthorizationModal;  