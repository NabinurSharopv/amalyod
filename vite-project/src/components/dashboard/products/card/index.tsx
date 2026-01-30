import type { FC } from "react";
import { HeartOutlined, ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { getData } from "../../../../redux/shop-slice";

const Card: FC<any> = (props) => {
  const dispatch = useReduxDispatch(); 

  const handleAddToCart = () => {
    dispatch(getData({ ...props } as any));
  };

  return (
    <div className="group relative bg-white w-full">
      {/* Hoverda chiqadigan yuqori chiziq */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#46A358] opacity-0 group-hover:opacity-100 transition-opacity z-10" />

      {/* Rasm qismi - Balandlik h-[250px] bo'lishi shart */}
      <div className="relative bg-[#FBFBFB] flex items-center justify-center p-6 h-[250px] overflow-hidden">
        {props.discount && (
          <div className="absolute top-2 left-0 bg-[#46A358] text-white text-[12px] px-2 py-1">
            {props.discount}% OFF
          </div>
        )}

        <img
          src={props.main_image}
          alt={props.title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hoverda chiqadigan tugmalar */}
        <div className="absolute bottom-[-50px] group-hover:bottom-4 transition-all duration-300 flex items-center gap-3">
          <button onClick={handleAddToCart} className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-[#3D3D3D] hover:text-[#46A358] shadow-md">
            <ShoppingCartOutlined className="text-xl" />
          </button>
          <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-[#3D3D3D] hover:text-red-500 shadow-md">
            <HeartOutlined className="text-xl" />
          </button>
          <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-[#3D3D3D] hover:text-[#46A358] shadow-md">
            <SearchOutlined className="text-xl" />
          </button>
        </div>
      </div>

      {/* Matn qismi */}
      <div className="pt-3 pb-5">
        <h3 className="text-[#3D3D3D] text-[16px] font-normal truncate">{props.title}</h3>
        <div className="flex items-center gap-3">
          <span className="text-[#46A358] font-bold text-[18px]">${props.price.toFixed(2)}</span>
          {props.discount && (
             <span className="text-[#A5A5A5] line-through text-[14px]">
               ${(props.price + 10).toFixed(2)}
             </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;