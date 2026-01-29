import { Form, Input } from "antd";
import { useRegisterMutation } from "../../../../../hooks/useQueryAction";
import { Loader } from "lucide-react";
import Cookies from "js-cookie";
import { notificationApi } from "../../../../../generic/notificationApi";
import type { RegisterType } from "../../../../../@types";

import googlePng from "../../../../../assets/img/google.png";
import facebookPng from "../../../../../assets/img/facebook.png";

const Register = () => {
  const input_style = "h-[45px] mt-2 !border-[#46A358]";
  const icon_style =
    "border h-[45px] border-[#EAEAEA] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer hover:bg-gray-50 transition-all active:scale-95 shadow-sm";

  const notify = notificationApi();
  const { mutate, isPending } = useRegisterMutation();

  // onFinishFailed funksiyasida password confirm xatolarini to‘g‘ri tutish uchun kichik tuzatish
  const onFailed = (errorInfo: any) => {
    // errorFieldsdagi name bu array bo‘lishi mumkin, shuning uchun tekshiramiz
    const hasPasswordError = errorInfo.errorFields.some(
      (field: any) =>
        Array.isArray(field.name) && field.name.includes("confirm_password")
    );
    if (hasPasswordError) {
      notify("second_password");
    }
  };

  // Ro'yxatdan o'tish uchun funksiyamiz
  const onRegister = (values: RegisterType & { confirm_password: string }) => {
    // confirm_password ni registerData dan ajratib tashlaymiz
    const { confirm_password: _, ...registerData } = values;

    mutate(registerData, {
      onSuccess: (res: any) => {
        const token = res?.data?.token || res?.token;
        if (token) {
          Cookies.set("token", token, { expires: 7 });

          if (res?.data?.user) {
            Cookies.set("user", JSON.stringify(res.data.user), { expires: 7 });
          }

          notify("login"); // Xush kelibsiz!

          // 1.5 sekunddan so‘ng sahifani yangilaymiz
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      },
      onError: (err: any) => {
        if (err?.response?.status === 409) {
          notify("409"); // Email allaqachon ro‘yxatdan o‘tgan holat uchun
        }
      },
    });
  };

  return (
    <div className="w-[90%] m-auto">
      <div className="mt-5 mb-2">
        <p className="text-[#3D3D3D] text-[14px] mb-4">
          Enter your details to create an account.
        </p>

        <Form
          layout="vertical"
          onFinish={onRegister}
          onFinishFailed={onFailed}
          requiredMark={false}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Ismni kiriting!" }]}
          >
            <Input placeholder="Name" className={input_style} />
          </Form.Item>

          <Form.Item
            name="surname"
            rules={[{ required: true, message: "Familiyani kiriting!" }]}
          >
            <Input placeholder="Surname" className={input_style} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Emailni kiriting!" },
              { type: "email", message: "To'g'ri email kiriting!" },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              className={input_style}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Parolni kiriting!" },
              { min: 8, message: "Kamida 8 ta belgi bo'lsin!" },
            ]}
          >
            <Input.Password placeholder="Password" className={input_style} />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Parolni tasdiqlang!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Parollar mos kelmadi!"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              className={input_style}
            />
          </Form.Item>

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#46A358] w-full mt-4 text-white h-10 rounded-md flex items-center justify-center disabled:opacity-70 transition-all active:scale-95 shadow-sm"
          >
            {isPending ? <Loader className="animate-spin" /> : "Register"}
          </button>
        </Form>

        <div className="flex items-center justify-center mt-8 mb-6 gap-4">
          <div className="flex-1 h-px bg-[#EAEAEA]" />
          <p className="text-[#3D3D3D] text-[13px] whitespace-nowrap">
            Or login with
          </p>
          <div className="flex-1 h-px bg-[#EAEAEA]" />
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

export default Register;
