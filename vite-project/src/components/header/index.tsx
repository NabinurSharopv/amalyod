import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../redux/modal-store";
import logo from "../../assets/img/logout.png";
import img1 from "../../assets/img/Vector (3).png";
import img2 from "../../assets/img/Savat.png";
import { FaRegBell, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate(); 
  const dispatch = useReduxDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useReduxSelector((state) => state.userSlice);

  console.log("Header user:", user);

  const displayName = user?.name || user?.email || "Login";

  return (
    <header className="border-b border-[#00800043] py-3 bg-white sticky top-0 z-50">
      <div className="w-[90%] md:w-[85%] m-auto flex items-center justify-between relative h-[50px]">
        <Link to={"/"} className="z-50">
          <img
            src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
            alt="Logo"
            className="w-32 md:w-40"
          />
        </Link>

        <div className="hidden min-[800px]:flex items-center gap-10 h-full pt-4">
          <Link
            to={"/"}
            className={`${pathname === "/" ? "text-[#46A358] border-b-2 border-[#46A358]" : "text-black"} font-bold pb-2 transition-all`}
          >
            Home
          </Link>
          <Link
            to={"/blog"}
            className={`${pathname === "/blog" ? "text-[#46A358] border-b-2 border-[#46A358]" : "text-black"} font-bold pb-2 transition-all`}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden sm:block cursor-pointer hover:scale-110 transition-transform">
            <img src={img1} alt="search" />
          </button>

          <button className="cursor-pointer relative hover:scale-110 transition-transform">
            <img src={img2} alt="cart" />
            <span className="absolute -top-2 -right-2 bg-[#46A358] text-white text-[10px] rounded-full px-1.5 font-bold">
              0
            </span>
          </button>
          <FaRegBell className="hidden sm:block text-[20px] cursor-pointer hover:text-[#46A358]" />

          <button
            onClick={() => {
              if (user) {
                return navigate('/profile');
              }
              dispatch(setAuthorizationModalVisibility());
            }}
            className="flex items-center justify-center gap-2 text-white w-20 md:w-25 h-8 md:h-9 bg-[#46A358] rounded-md cursor-pointer active:scale-95 transition-all font-bold text-sm"
          >
            <img src={logo} alt="auth-icon" />
            <span className="truncate max-w-15">
              {displayName}
            </span> 
          </button>

          <button
            className="min-[801px]:hidden text-2xl z-50 text-[#3D3D3D]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        <div
          className={`
          absolute top-[62px] left-0 w-full bg-white border-b border-[#00800043] flex flex-col p-6 gap-5 transition-all duration-300 shadow-lg min-[801px]:hidden
          ${menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-5 opacity-0 invisible"}
        `}
        >
          <Link
            to={"/"}
            onClick={() => setMenuOpen(false)}
            className={`${pathname === "/" ? "text-[#46A358]" : "text-black"} font-bold text-lg`}
          >
            Home
          </Link>
          <Link
            to={"/blog"}
            onClick={() => setMenuOpen(false)}
            className={`${pathname === "/blog" ? "text-[#46A358]" : "text-black"} font-bold text-lg`}
          >
            Blog
          </Link>

          <div className="flex gap-6 pt-4 border-t border-gray-100">
            <img src={img1} alt="search" className="w-6 h-6" />
            <FaRegBell className="text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;