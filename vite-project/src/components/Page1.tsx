import { ShoppingCart, Heart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

import img4 from '../assets/img/img4-removebg-preview.png';
import img5 from '../assets/img/img5.png';
import img6 from '../assets/img/img6.png';
import img7 from '../assets/img/img7.png';
import img8 from '../assets/img/img8.png';
import img9 from '../assets/img/img9.png';
import img10 from '../assets/img/img10.png';
import img11 from '../assets/img/img11.png';
import img12 from '../assets/img/img12.png';
import img13 from '../assets/img/img13.png';

const Page1 = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const categories = [
    { name: 'House Plants', count: 33, active: true },
    { name: 'Potter Plants', count: 12 },
    { name: 'Seeds', count: 65 },
    { name: 'Small Plants', count: 39 },
    { name: 'Big Plants', count: 23 },
    { name: 'Succulents', count: 17 },
    { name: 'Trerrariums', count: 19 },
    { name: 'Gardening', count: 13 },
    { name: 'Accessories', count: 18 },
  ];

  const products = [
    { id: 1, name: "Barberton Daisy", price: 119.0, img: img5 },
    { id: 2, name: "Angel Wing Begonia", price: 169.0, img: img6, active: true },
    { id: 3, name: "African Violet", price: 199.0, oldPrice: 229.0, img: img7, discount: "13% OFF" },
    { id: 4, name: "Beach Spider Lily", price: 129.0, img: img8 },
    { id: 5, name: "Blushing Bromeliad", price: 179.0, img: img9 },
    { id: 6, name: "Aluminum Plant", price: 139.0, img: img10 },
    { id: 7, name: "Beach Spider Lily", price: 129.0, img: img11 },
    { id: 8, name: "Blushing Bromeliad", price: 179.0, img: img12 },
    { id: 9, name: "Aluminum Plant", price: 139.0, img: img13 },
  ];

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-11 p-4 md:p-10 bg-white">
       
      <button 
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="lg:hidden flex items-center gap-2 bg-[#46A358] text-white px-4 py-2 rounded-md w-fit"
      >
        {isSidebarOpen ? <X size={20}/> : <Menu size={20}/>} Filterlar
      </button>

      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-[300px] bg-[#FBFBFB] p-6 flex flex-col font-sans transition-all`}>
        <div className="mb-9">
          <h3 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Categories</h3>
          <div className="flex flex-col gap-y-4 px-3">
            {categories.map((item, index) => (
              <div key={index} className={`flex justify-between items-center cursor-pointer text-[15px] ${item.active ? 'text-[#46A358] font-bold' : 'text-[#3D3D3D] hover:text-[#46A358]'}`}>
                <span>{item.name}</span>
                <span>({item.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-9">
          <h3 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Price Range</h3>
          <div className="px-3">
            <div className="relative w-full h-1 bg-[#46A35833] rounded-full mb-4 mt-6">
              <div className="absolute h-full w-[60%] bg-[#46A358] left-0"></div>
              <div className="absolute w-4 h-4 bg-[#46A358] border-[3px] border-white rounded-full -top-[6px] left-0 shadow-sm"></div>
              <div className="absolute w-4 h-4 bg-[#46A358] border-[3px] border-white rounded-full -top-[6px] left-[60%] shadow-sm"></div>
            </div>
            <div className="text-[15px] text-[#3D3D3D] mb-4">
              Price: <span className="text-[#46A358] font-bold">$39 - $1230</span>
            </div>
            <button className="bg-[#46A358] text-white px-7 py-2 rounded-md font-bold text-[16px] w-full sm:w-auto">Filter</button>
          </div>
        </div>

        <div className="hidden lg:flex relative bg-gradient-to-b from-[#46A3581A] to-[#46A3580D] rounded-sm flex-col items-center pt-8 overflow-hidden">
          <h2 className="text-[#46A358] text-[40px] font-black italic leading-none mb-1">Super Sale</h2>
          <p className="text-[#3D3D3D] font-bold text-[16px] uppercase tracking-wider mb-2">Up to 75% off</p>
          <img src={img4} alt="Sale" className="max-w-full h-auto object-contain max-h-60" />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex gap-4 md:gap-8 text-[14px] md:text-[15px] overflow-x-auto w-full md:w-auto whitespace-nowrap border-b md:border-none">
            <span className="text-[#46A358] border-b-2 border-[#46A358] pb-2 font-bold cursor-pointer">All Plants</span>
            <span className="text-[#3D3D3D] pb-2 cursor-pointer hover:text-[#46A358]">New Arrivals</span>
            <span className="text-[#3D3D3D] pb-2 cursor-pointer hover:text-[#46A358]">Sale</span>
          </div>
          <div className="text-[14px] md:text-[15px] text-[#3D3D3D]">
            Sort by: <span className="font-semibold cursor-pointer">Default sorting ▼</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className={`group cursor-pointer ${product.active ? 'border-t-2 border-[#46A358]' : ''}`}>
              <div className="bg-[#FBFBFB] relative flex justify-center items-center py-8 overflow-hidden rounded-md">
                {product.discount && (
                  <div className="absolute top-0 left-0 bg-[#46A358] text-white px-2 py-1 text-[12px]">{product.discount}</div>
                )}
                <img src={product.img} alt={product.name} className="w-full h-48 md:h-56 object-contain p-4" />
                
                <div className="absolute bottom-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white p-2 rounded-lg shadow-md hover:text-[#46A358]"><ShoppingCart size={20}/></div>
                  <div className="bg-white p-2 rounded-lg shadow-md hover:text-[#46A358]"><Heart size={20}/></div>
                  <div className="bg-white p-2 rounded-lg shadow-md hover:text-[#46A358]"><Search size={20}/></div>
                </div>
              </div>
              <h3 className="mt-3 text-[#3D3D3D] text-[16px]">{product.name}</h3>
              <div className="flex gap-3 items-center">
                <p className="text-[#46A358] font-bold text-[18px]">${product.price.toFixed(2)}</p>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-[14px]">${product.oldPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end mt-12 gap-2">
          {['1', '2', '3', '4', '>'].map((page, i) => (
            <span 
              key={i} 
              className={`w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer font-bold border ${
                page === '1' ? 'bg-[#46A358] text-white border-[#46A358]' : 'border-[#E5E5E5] text-[#3D3D3D] hover:border-[#46A358]'
              }`}
            >
              {page}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page1;