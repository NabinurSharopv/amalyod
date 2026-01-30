import { ArrowRight } from 'lucide-react';
import img14 from '../assets/img/img14.png';
import img15 from '../assets/img/img15.png';

const BannerSection = () => {
  return (
    // max-w-300 o'rniga max-w-[1200px] ishlatildi, padding mobil uchun moslandi
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6 py-8 md:py-16 px-4">
      
      {/* Birinchi Banner */}
      <div className="w-full lg:w-1/2 min-h-[250px] bg-[#FBFBFB] relative flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 overflow-hidden rounded-sm border border-gray-100">
        {/* Dekorativ doiralar - kichik ekranda xalaqit bermasligi uchun opacity pasaytirildi */}
        <div className="absolute -left-10 -bottom-10 w-32 h-32 border-2 border-[#46A35866] rounded-full opacity-50 sm:opacity-100"></div>
        <div className="absolute -left-12 -bottom-12 w-32 h-32 border border-[#46A35844] rounded-full opacity-50 sm:opacity-100"></div>

        {/* Rasm qismi */}
        <div className="w-full sm:w-[45%] z-10 flex justify-center items-center sm:items-end mb-4 sm:mb-0">
          <img 
            src={img14} 
            alt="Summer Cactus" 
            className="w-40 sm:w-full h-auto object-contain transform sm:scale-125 sm:translate-y-6" 
          />
        </div>

        {/* Matn qismi */}
        <div className="w-full sm:w-[55%] text-center sm:text-right flex flex-col items-center sm:items-end z-10">
          <h2 className="text-[#3D3D3D] font-black text-base sm:text-[18px] uppercase leading-tight sm:leading-6 max-w-[180px]">
            Summer Cactus & Succulents
          </h2>
          <p className="text-[#727272] text-xs sm:text-[14px] leading-relaxed sm:leading-6 mt-2 sm:mt-3 max-w-[260px]">
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <button className="mt-4 sm:mt-6 bg-[#46A358] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-md flex items-center gap-2 hover:bg-[#3d8b4c] transition-all text-xs sm:text-sm font-medium">
            Find More <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Ikkinchi Banner */}
      <div className="w-full lg:w-1/2 min-h-[250px] bg-[#FBFBFB] relative flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 overflow-hidden rounded-sm border border-gray-100">
        <div className="absolute -left-10 -bottom-10 w-32 h-32 border-2 border-[#46A35866] rounded-full opacity-50 sm:opacity-100"></div>
        <div className="absolute -left-12 -bottom-12 w-32 h-32 border border-[#46A35844] rounded-full opacity-50 sm:opacity-100"></div>
        
        <div className="w-full sm:w-[45%] z-10 flex justify-center items-center sm:items-end mb-4 sm:mb-0">
          <img 
            src={img15} 
            alt="Styling Trends" 
            className="w-40 sm:w-full h-auto object-contain transform sm:scale-125 sm:translate-y-6" 
          />
        </div>

        <div className="w-full sm:w-[55%] text-center sm:text-right flex flex-col items-center sm:items-end z-10">
          <h2 className="text-[#3D3D3D] font-black text-base sm:text-[18px] uppercase leading-tight sm:leading-6 max-w-[180px]">
            Styling Trends & Much More
          </h2>
          <p className="text-[#727272] text-xs sm:text-[14px] leading-relaxed sm:leading-6 mt-2 sm:mt-3 max-w-[260px]">
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <button className="mt-4 sm:mt-6 bg-[#46A358] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-md flex items-center gap-2 hover:bg-[#3d8b4c] transition-all text-xs sm:text-sm font-medium">
            Find More <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default BannerSection;