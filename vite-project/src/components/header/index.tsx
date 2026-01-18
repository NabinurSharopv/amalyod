import { Link } from "react-router-dom";
import {
  BellOutlined,
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Header = () => {
  const dispatch = useReduxDispatch();
  return (
    <header className="border-b border-[#00800043] py-3">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img
              src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
              alt=""
            />
          </Link>
        </div>

        <div className="flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/blog"}>Blog</Link>
        </div>
        <div className="flex items-center gap-5">
          <SearchOutlined className="text-[20px]" />
          <BellOutlined className="text-[20px]" />
          <ShoppingCartOutlined className="text-[20px]" />
          <button
            onClick={() => dispatch(authorizationModalVisibltiyConf())}
            className="text-white w-[100px] h-[35px]  bg-[#46A358] flex items-center gap-1 justify-center rounded-md max-md:hidden cursor-pointer"
          >
            <LoginOutlined />
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;