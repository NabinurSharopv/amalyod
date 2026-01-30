import { useReduxSelector } from "../../../../hooks/useRedux";

const Prices = () => {
  // Redux store'dan savatcha ma'lumotlarini olish
  const { data = [] } = useReduxSelector((state) => state.shopSlice);

  const coupon_title_style = "text-[15px] text-[#3D3D3D] font-normal";

  // Xatolarni oldini olish uchun
  const safeData = Array.isArray(data) ? data : [];
  
  // Subtotal hisoblash: narx * counter
  const subtotal = safeData.reduce((total, item) => {
    if (!item) return total;
    
    const price = Number(item.price) || 0;
    const counter = Number(item.counter) || 1; // Agar counter bo'lmasa, 1 deb olamiz
    
    return total + (price * counter);
  }, 0);

  // Shipping faqat savatchada narsa bo'lsa qo'shiladi
  const shipping = subtotal > 0 ? 16.0 : 0;

  // Umumiy total
  const total = subtotal + shipping;

  return (
    <div className="mt-[20px] space-y-4">
      {/* Subtotal */}
      <div className="flex justify-between items-center">
        <h3 className={coupon_title_style}>Subtotal</h3>
        <h2 className="text-[#3D3D3D] text-[18px] font-medium">
          ${subtotal.toFixed(2)}
        </h2>
      </div>

      {/* Savatchadagi mahsulotlar soni (debug uchun) */}
      <div className="text-xs text-gray-500">
        {safeData.length} item(s) in cart
      </div>

      {/* Coupon Discount */}
      <div className="flex justify-between items-center">
        <h3 className={coupon_title_style}>Coupon Discount</h3>
        <h2 className="text-[#3D3D3D] text-[15px] font-medium">(-) $0.00</h2>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center">
        <h3 className={coupon_title_style}>Shipping</h3>
        <h2 className="text-[#3D3D3D] text-[18px] font-medium">
          ${shipping.toFixed(2)}
        </h2>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center pt-3 border-t">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total</h2>
        <h1 className="text-[#46A358] text-[20px] font-bold">
          ${total.toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

export default Prices;