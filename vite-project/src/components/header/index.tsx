import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../redux/modal-store";
import logo from "../../assets/img/logout.png";
import img1 from "../../assets/img/vector3.png  ";
import img2 from "../../assets/img/savat.png";
import { FaRegBell, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate(); 
  const dispatch = useReduxDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useReduxSelector((state) => state.userSlice);
  const { data } = useReduxSelector((state) => state.shopSlice); 
  const displayName = user?.name || user?.email || "Login";
  return (
    <header className="border-b border-[#00800043] py-3 bg-white sticky top-0 z-50">
      <div className="w-[90%] md:w-[95%] m-auto flex items-center justify-between relative h-[50px]">
        <Link to={"/"} className="z-50">
          <img
            src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
            alt="Logo"
            className="w-32 md:w-40"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden min-[800px]:flex items-center gap-10 h-full pt-4">
          <Link to={"/"} className={`${pathname === "/" ? "text-[#46A358] border-b-2 border-[#46A358]" : "text-black"} font-bold pb-2 transition-all`}>Home</Link>
          <Link to={"/blog"} className={`${pathname === "/blog" ? "text-[#46A358] border-b-2 border-[#46A358]" : "text-black"} font-bold pb-2 transition-all`}>Blog</Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden sm:block cursor-pointer hover:scale-110 transition-transform">
            <img src={img1} alt="search" />
          </button>


          {/* 2. SAVATCHA QISMI - Endi raqam Redux-dan kelyapti */}
          <button 
            onClick={() => navigate('/shop')} // Savatcha sahifasiga o'tish (agar bo'lsa)
            className="cursor-pointer relative hover:scale-110 transition-transform"
          >
            <img src={img2} alt="cart" />
            {data.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#46A358] text-white text-[10px] rounded-full min-w-4 h-4 flex items-center justify-center px-1 font-bold">
                {data.length}
              </span>
            )}
          </button>

 
          <FaRegBell className="hidden sm:block text-[20px] cursor-pointer hover:text-[#46A358]" />
          <button
            onClick={() => {
              if (user) return navigate('/profile');
              dispatch(setAuthorizationModalVisibility());
            }}
            className="flex items-center justify-center gap-2 text-white w-20 md:w-25 h-8 md:h-9 bg-[#46A358] rounded-md cursor-pointer active:scale-95 transition-all font-bold text-sm"
          >
            <img src={logo} alt="auth-icon" />
            <span className="truncate max-w-15">{displayName}</span> 
          </button>

          <button className="min-[801px]:hidden text-2xl z-50 text-[#3D3D3D]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu qismi pastda qoladi... */}
      </div>
    </header>
  );
};

export default Header;