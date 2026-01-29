import type { DicountFlowerType, QueryType } from "../../../../@types";
import { useQueryHandler } from "./../../../../hooks/useQuery";

const Discount = () => {
    const { data, isLoading, isError }:QueryType<DicountFlowerType> = useQueryHandler({
        url: "features/discount",
        pathname: "discount",
    });
    
    console.log(data);
    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading discounts</div>;
    
    return <div className="flex flex-col justify-between items-center gap-[10px] text-center mt-4">
        <h2 className="text-[#46a358] text-[20px] font-normal leading-[120%]">
            {data?.title}
        </h2>
        <h2 className="text-[#3d3d3d] font-bold text-[20px]">UP TO {data?.discoount_up_to}% OFF</h2>
        <img src={data?.poster_image_url} alt="" />
    </div>;
};

export default Discount;