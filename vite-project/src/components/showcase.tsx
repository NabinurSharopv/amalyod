 import img1 from "../assets/img/img1.png";  
 import img2 from "../assets/img/img2.png";  
const Showcase = () => {
  return (
    <section className="w-full bg-white px-4">
      <div className="max-w-[1200px] min-h-122.5 bg-[#F5F5F580] m-auto flex items-center justify-between flex-wrap p-8 md:p-12 rounded-sm mt-9">
        
        <div className="flex-1 min-w-75">
          <p className="font-medium text-[14px] uppercase tracking-widest text-[#3D3D3D]">
            Welcome to GreenShop
          </p>
          <h1 className="max-w-140 font-black text-[40px] md:text-[70px] leading-[1.1] uppercase text-[#3D3D3D] mt-2">
            Let’s Make a <span className="text-[#46A358]">Better Planet</span>
          </h1>
          <p className="max-w-125 text-[14px] text-[#727272] mt-4 leading-6">
            We are an online plant shop offering a wide range of trendy and lifestyle plants. 
            Whether you need some inspiration for your home or garden, we are here to help.
          </p>
          <button className="mt-10 px-8 py-3 bg-[#46A358] text-white rounded-md font-bold uppercase hover:bg-[#3d8b4c] transition-all active:scale-95 text-[16px]">
            SHOP NOW
          </button>
        </div>
    
        <div className="flex items-center ">
          <img className="absolute mt-59" src={img2} alt="" />
          <img 
            className="w-75 md:w-112.5 relative z-10" 
            src={img1} 
            alt="Plant" 
          />
        </div>
      </div>
    </section>
  )
}

export default Showcase