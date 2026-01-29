import { useState } from "react";
import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../../../redux/modal-store";
import Login from "./login"; 
import Register from "./registr"; // Yuqoridagi komponentni bu yerga chaqiramiz

const AuthorizationModal = () => {
  const dispatch = useReduxDispatch();
  const [authType, setAuthType] = useState("login"); 

  const { authorizationModalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );

  return (
    <Modal
      open={authorizationModalVisibility} 
      onCancel={() => dispatch(setAuthorizationModalVisibility())}
      footer={null}
      centered // <-- BU MODALNI O'RTADA CHIQARADI
      destroyOnHidden 
     >
      <div className="w-full py-4">
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setAuthType("login")}
            className={`text-[20px] font-medium ${authType === "login" ? "text-[#46A358] border-b-2 border-[#46A358]" : ""}`}
          >
            Login
          </button>
          <span className="text-[20px]">|</span>
          <button
            onClick={() => setAuthType("register")}
            className={`text-[20px] font-medium ${authType === "register" ? "text-[#46A358] border-b-2 border-[#46A358]" : ""}`}
          >
            Register
          </button>
        </div>

        {/* Tanlangan tabga qarab komponent almashadi */}
        {authType === "login" ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthorizationModal;