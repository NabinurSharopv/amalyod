import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Prices from "./prices";

const CardTotal = () => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0); // <--- Bu ishlatilishi kerak
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim() === "") return;
    
    if (couponCode.toUpperCase() === "SAVE10") {
      setDiscount(10); 
      setCouponApplied(true);
      alert("Coupon applied! 10% discount!");
    } else if (couponCode.toUpperCase() === "FREESHIP") {
      setDiscount(0); 
      setCouponApplied(true);
      alert("Free shipping applied!");
    } else {
      alert("Invalid coupon code!");
      setCouponApplied(false);
      setDiscount(0);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px]">
        Card Total
      </h3>
      
      <form onSubmit={handleApplyCoupon} className="flex h-[40px] mt-[35px]">
        <input
          name="coupon"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code here..."
          className="border w-4/5 border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-sm"
        />
        <button 
          type="submit" 
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none hover:bg-[#3d8f4d] transition-colors"
        >
          <span>Apply</span>
        </button>
      </form>
      
      {couponApplied && (
        <div className="mt-2 text-sm text-green-600 font-medium">
          {/* DISCOUNT ENDI BU YERDA ISHLATILDI */}
          ✓ Coupon "{couponCode}" applied {discount > 0 ? `(${discount}% off)` : ""}
        </div>
      )}
      
      {/* Agar Prices komponenti chegirmani hisoblay olsa, unga ham bering: */}
      <Prices /> 
      
      <button 
        onClick={() => navigate("/proceed-checkout")}
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[45px] mt-[30px] hover:bg-[#3d8f4d] transition-colors font-medium"
      >
        Proceed To Checkout
      </button>
      
      <Link to="/shop" className="flex justify-center">
        <button className="mt-[14px] text-[#46A358] cursor-pointer hover:text-[#3d8f4d] transition-colors font-medium">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CardTotal;