import { DeleteFilled } from "@ant-design/icons";
import type { FC } from "react";
import type { ShopCardType } from "../../../../@types";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { deleteData, updateQuantity } from "../../../../redux/shop-slice";

const Card: FC<ShopCardType> = (props) => {
  const { main_image, title, _id, price, counter = 1, userPrice } = props;
  const dispatch = useReduxDispatch();

  const handleDecrement = () => {
    if (counter > 1) {
      dispatch(updateQuantity({ 
        id: _id, 
        quantity: counter - 1 
      }));
    }
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ 
      id: _id, 
      quantity: counter + 1 
    }));
  };

  return (
    <div className="my-5 bg-[#eee] p-2 flex items-center justify-between rounded-lg">
      {/* Mahsulot rasmi va nomi */}
      <div className="flex items-center gap-4 w-[40%]">
        <img
          className="w-[70px] h-[70px] object-cover"
          src={main_image}
          alt={title}
        />
        <div>
          <h3 className="text-[16px] font-medium">{title}</h3>
          <p className="text-[14px] font-normal pt-[10px] max-sm:text-[12px]">
            <span className="text-[#A5A5A5]">SKU:</span> {_id}
          </p>
        </div>
      </div>

      {/* Narxi */}
      <div className="text-[#727272] text-[16px] font-medium w-[15%]">
        ${price?.toFixed(2)}
      </div>

      {/* Plus/Minus (Quantity) qismi */}
      <div className="flex items-center gap-3 w-[20%] justify-center">
        <button 
          onClick={handleDecrement}
          disabled={counter <= 1}
          className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3d8f4d] transition-colors"
        >
          -
        </button>
        <span className="text-[17px] min-w-[30px] text-center">{counter}</span>
        <button 
          onClick={handleIncrement}
          className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white flex items-center justify-center hover:bg-[#3d8f4d] transition-colors"
        >
          +
        </button>
      </div>

      {/* Umumiy narxi (Total) */}
      <div className="text-[#727272] text-[16px] font-medium w-[15%] text-right">
        ${userPrice?.toFixed(2) || (price * counter).toFixed(2)}
      </div>

      {/* O'chirish tugmasi */}
      <div className="w-[10%] text-right">
        <DeleteFilled 
          onClick={() => dispatch(deleteData(_id))}
          className="text-[#727272] text-[20px] cursor-pointer hover:text-red-500 transition-colors"
        />
      </div>
    </div>
  );
};

export default Card;