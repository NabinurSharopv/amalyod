// src/components/hero-item/index.tsx
import type { FC } from "react";
import type { HeroMockType } from "../../../@types";
const HeroItem: FC<HeroMockType> = (props) => {
  const { title, subTitle, description, buttonText, big_img_url, small_img_url } = props;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[400px] px-4 md:px-8">
      {/* Text Content - Left Side */}
      <div className="flex-[2] max-w-2xl space-y-6">
        <p className="text-[#3D3D3D] text-sm md:text-base font-medium uppercase tracking-wide">
          {title}
        </p>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#3D3D3D] leading-tight">
          {subTitle}
        </h1>
        
        <p className="text-[#727272] text-base md:text-lg leading-relaxed">
          {description}
        </p>
        
        <button className="bg-[#46A358] hover:bg-[#3d924c] text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
          {buttonText}
        </button>
      </div>

      {/* Images - Right Side */}
      <div className="flex-[1] relative w-full max-w-md mt-8 md:mt-0">
        {/* Big Main Image */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={big_img_url} 
            alt="Main plant" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Small Decorative Image */}
        <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src={small_img_url} 
            alt="Small plant" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroItem;