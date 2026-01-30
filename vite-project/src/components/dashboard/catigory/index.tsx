import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../hooks/useAxios";
import type { CategoryType, QueryType } from "../../../@types";
import { LoaderApi } from "../../../generic/loader";
import Price from "./price";
import Discount from "./discount";
import { useSearchParamsHandler } from "../../../hooks/paramsApi";

const Category = () => {
  const { setParam, getParam } = useSearchParamsHandler();

  // URL dan parametrlarni olish (kichik harflarda)
  const category = getParam("category") || "house-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting"; 
  const type = getParam("type") || "all-plans";

  const request = useAxios();

  const { data, isLoading, isError }: QueryType<CategoryType[]> = useQuery({
    queryKey: ["category", category, range_min, range_max, sort, type], 
    queryFn: () => request({
      url: "flower/category",
      method: "GET",
      param: { category, range_min, range_max, sort, type }
    })  
  });

  const { categoryLoader } = LoaderApi();
    
  return (
    <div className="ml-9 bg-[#f2f2f2] p-5 rounded-[5px]">
      <h2 className="text-[#3d3d3d] font-bold mb-4">Categories</h2>
      <div className="p-2 flex flex-col gap-3">
        {isLoading || isError ? categoryLoader() 
        : data?.map((value) => (
          <div
            key={value._id}
            onClick={() => setParam({ category: value.route_path })}
            className={`flex items-center justify-between cursor-pointer transition-colors hover:text-main ${
              category === value.route_path ? "text-main font-bold" : "text-[#3d3d3d]"
            }`}
          >
            <h3 className="text-[15px]">{value.title}</h3>
            <h3 className="text-[15px]">({value.count})</h3>
          </div>
        ))}
      </div>
      
      {/* Price komponentiga e'tibor bering, uni pastda tuzatamiz */}
      <Price />
      <Discount />
    </div>
  );
};

export default Category;