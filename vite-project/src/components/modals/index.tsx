import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./modals-item/authorization"

const Modals = () => {
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  return   <>
    {authorizationModalVisiblity && <AuthorizationModal />}
    </>
  
}

export default Modals