import { Form, Input, message } from "antd"; // message qo'shildi
import { LoadingOutlined } from "@ant-design/icons";

import { useLoginMutate } from "../../../../../hooks/useQuery";
import type { LoginType } from "../../../../../@types";

import googlePng from "../../../../../assets/img/google.png";
import facebookPng from "../../../../../assets/img/facebook.png";

const Login = () => {
  const input_style: string = "h-[40px] mt-2 !border-[#46A358]";
  const icon_style: string =
    "border h-[40px] border-[#EAEAEA] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer hover:bg-gray-50 transition-all";

  const { mutate, isPending } = useLoginMutate();

  const onAuth = (values: LoginType) => {
    // mutate funksiyasiga ikkinchi parametr sifatida callback'larni beramiz
    mutate(values, {
      onSuccess: () => {
        // Muvaffaqiyatli login bo'lganda rasmdagi xabar chiqadi
        message.success("Siz ro'yxatdan o'tdingiz!");
      },
      onError: (err: any) => {
        // Xatolik bo'lganda (ixtiyoriy)
        message.error(err?.response?.data?.message || "Login failed!");
      }
    });
  };

  return (
    <div className="w-[90%] m-auto">
      <div className="mt-5 mb-2">
        <p className="text-[#3D3D3D] text-[14px] mb-4">Enter your email and password to login.</p>
        <Form layout="vertical" onFinish={onAuth}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="almamun_uxui@outlook.com" className={input_style} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="***********" className={input_style} />
          </Form.Item>

          <p className="text-end mt-2 text-[#46A358] text-[14px] cursor-pointer hover:underline">
            Forgot Password?
          </p>

          <button 
            type="submit" 
            disabled={isPending}
            className="bg-[#46A358] w-full mt-6 text-white h-[45px] rounded-md font-bold flex items-center justify-center disabled:opacity-70 transition-all"
          >
            {isPending ? <LoadingOutlined className="text-lg" /> : "Login"}
          </button>
        </Form>

        <div className="flex items-center justify-center mt-8 mb-6 gap-4">
          <div className="flex-1 h-px bg-[#EAEAEA]"></div>
          <p className="text-[#3D3D3D] text-[13px] whitespace-nowrap">Or login with</p>
          <div className="flex-1 h-px bg-[#EAEAEA]"></div>
        </div>

        <div className={icon_style}>
          <img src={googlePng} alt="google" className="w-5 h-5 object-contain" />
          <p className="text-[#727272] text-[14px] font-medium">Login with Google</p>
        </div>

        <div className={icon_style}>
          <img src={facebookPng} alt="facebook" className="w-5 h-5 object-contain" />
          <p className="text-[#727272] text-[14px] font-medium">Login with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;