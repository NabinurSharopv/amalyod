import { Link, useLocation } from "react-router-dom";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
 import { FaRegBell } from "react-icons/fa6";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);


  return (
    <header className="border-b border-[#00800043] py-3">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img
              src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex gap-5">
          <Link to={"/"}  className={`${pathname === "/" && "text-main"} font-bold`}>
          Home
          </Link>
          <Link to={"/blog"} className={`${pathname === "/blog" ? "text-main" : "text-black"  } font-bold `}  >
          Blog
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-[20px] cursor-pointer"><img src={img1} alt="" /></button>
          <button className="text-[20px] cursor-pointer"><img src={img2} alt="" /></button>
          <FaRegBell className="text-[20px]" />
          <button className="text-white w-[100px] h-[35px] bg-[#46A358] flex items-center gap-1 justify-center rounded-md max-md:hidden cursor-pointer">
            <p className="font-medium">Login</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;