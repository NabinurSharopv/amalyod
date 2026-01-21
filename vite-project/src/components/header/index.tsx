import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthorizationModalVisibility } from "../../redux/modal-store";

import img1 from "../../assets/img/Vector (3).png";
import img2 from "../../assets/img/Savat.png";
import { FaRegBell, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#00800043] py-3 bg-white sticky top-0 z-50">
      <div className="w-[90%] md:w-[85%] m-auto flex items-center justify-between relative h-[50px]">
        
        {/* 1. Logo */}
        <Link to={"/"} className="z-50">
          <img 
            src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg" 
            alt="Logo" 
            className="w-32 md:w-40" 
          />
        </Link>

        {/* 2. Desktop Navigation (800px dan yuqorida ko'rinadi) */}
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

        {/* 3. Action Buttons */}
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
            onClick={() => dispatch(setAuthorizationModalVisibility())} 
            className="text-white w-20 md:w-25 h-8 md:h-9 bg-[#46A358] rounded-md cursor-pointer active:scale-95 transition-all font-bold text-sm"
          >
            Login
          </button>

          {/* Burger Tugmasi (Faqat 800px dan pastda ko'rinadi) */}
          <button 
            className="min-[801px]:hidden text-2xl z-50 text-[#3D3D3D]" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        {/* 4. Mobile Menu (800px dan pastda ishlaydi) */}
        <div className={`
          absolute top-[62px] left-0 w-full bg-white border-b border-[#00800043] flex flex-col p-6 gap-5 transition-all duration-300 shadow-lg min-[801px]:hidden
          ${menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-5 opacity-0 invisible"}
        `}>
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