import { useReduxSelector } from "../../../../hooks/useRedux";

const Prices = () => {
  const coupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  const { data } = useReduxSelector((state) =>  state.shopSlice);
  console.log(data);  

  return (
    <div>
      <div className="mt-[20px]">
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${coupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$ 0</h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${coupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px]"> $16.00</h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${coupon_title_style}`}>Shipping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>
      <div className="flex justify-between mt-[20px]">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
        <h1 className={`text-[#46A358] text-[18px] font-bold`}>$ 0</h1>
      </div>
      {/* {Boolean(coupon) && (
        <h1 className={`text-[#46A358] text-[18px] font-bold`}>
          Discounted total here
        </h1>
      )} */}
    </div>
  );
};

export default Prices;