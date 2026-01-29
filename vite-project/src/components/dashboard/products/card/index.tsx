import type { FC } from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  main_image: string;
  discount?: number;
  category?: string;
  rating?: number;
  stock?: number;
}

const Card: FC<ProductType> = (props) => {
  return (
    <div className="relative bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Product Image Container */}
      <div className="relative h-64 bg-gray-50 flex justify-center items-center overflow-hidden p-4">
        {/* Product Image */}
        <img
          src={props.main_image}
          alt={props.title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Discount Badge - TOP LEFT (Rasmda ko'rinadi) */}
        {props.discount && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
            {props.discount}% OFF
          </div>
        )}
        
        {/* Action Buttons - TOP RIGHT */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 hover:scale-110 transition-all">
            <HeartOutlined className="text-gray-700" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 hover:scale-110 transition-all">
            <ShoppingCartOutlined className="text-gray-700" />
          </button>
        </div>
        
        {/* Quick View Button - Bottom Center on Hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-center py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="font-medium">Quick View</button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {props.title}
        </h3>
        
        {/* Rating */}
        {props.rating && (
          <div className="flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarFilled 
                key={i} 
                className={`text-sm ${i < Math.floor(props.rating!) ? 'text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({props.rating})</span>
          </div>
        )}
        
        {/* Price Section */}
        <div className="flex justify-center items-center gap-3 pt-2">
          {/* Current Price - GREEN */}
          <span className="text-xl font-bold text-[#46A358]">
            ${props.price.toFixed(2)}
          </span>
          
          {/* Original Price with Line-through */}
          {props.discount && (
            <span className="text-lg text-gray-400 line-through">
              ${(props.price / (1 - props.discount / 100)).toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button - Bottom */}
        <button className="w-full mt-4 bg-[#46A358] hover:bg-[#3d8f4d] text-white font-medium py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2">
          <ShoppingCartOutlined />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;