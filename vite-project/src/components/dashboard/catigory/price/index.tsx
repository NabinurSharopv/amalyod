import { Slider } from "antd";
import { useState } from "react";
import { useSearchParamsHandler } from "../../../../hooks/paramsApi";

const Price = () => {
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 1000]);
  const { setParam } = useSearchParamsHandler();

  return (
    <div className="mt-8">
      <h3 className="text-[#3d3d3d] font-bold mb-3">Price Range</h3>
      <Slider 
        range 
        value={sliderValue}
        onChange={(val) => setSliderValue(val)}
        min={0}
        max={1000}
        step={10}
        className="mb-4"
      />
      <div className="flex items-center justify-between mt-4">
        <span className="text-[#3d3d3d] font-medium text-sm">Price:</span>
        <span className="text-[#46a358] text-[15px] font-bold">
          {sliderValue[0]}$ - {sliderValue[1]}$
        </span>
      </div>

      {/* TUGMANING KLASSLARINI TO'G'RI YOZISH: */}
      <button
        onClick={() => setParam({ 
          range_min: sliderValue[0], 
          range_max: sliderValue[1] 
        })}
        className="bg-[#46a358] text-white w-full mt-4 py-2 px-4 rounded-md font-bold hover:bg-[#3d8f4d] transition-all cursor-pointer shadow-md active:scale-95"
      >
        Filter
      </button>
    </div>
  );
};

export default Price;