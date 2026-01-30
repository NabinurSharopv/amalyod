import { Empty } from "antd";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/useRedux"; 

const Shopping = () => { 
  const navigate = useNavigate();
  // Redux-dan savatchadagi ma'lumotlarni olamiz
  const { data } = useReduxSelector((state) => state.shopSlice);

  return (
    <div className="max-w-[80%] ml-[90px] ">
      {/* Sarlavhalar qatori */}
      <div className="flex items-center justify-between text-start border-b border-[#46A358] pb-3">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[40%]">
          Products
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Price
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Quantity
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Total
        </h2>
        <h3 className="font-medium text-[#3D3D3D]">Delete</h3>
      </div>

      {/* Mahsulotlar ro'yxati yoki Bo'sh holat */}
      {data.length ? (
        data.map((value) => (
          <Card key={value._id} {...value} />
        ))
      ) : (
        <div className="flex justify-center flex-col items-center mt-10">
          <Empty description="Savatchangiz bo'sh" />
          <button
            className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[20px] mt-[10px] cursor-pointer hover:bg-[#3d8f4d] transition-all"
            onClick={() => navigate("/")}
          >
            Go shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;