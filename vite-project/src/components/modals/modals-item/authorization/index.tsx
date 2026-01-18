import { Modal } from "antd";
import { useReduxSelector } from "../../../../hooks/useRedux"

const AuthorizationModal = () => {
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  
  
  return ( 
     <Modal open={authorizationModalVisiblity} >
        <h1>salom</h1>
     </Modal>
  );  
};

export default AuthorizationModal;