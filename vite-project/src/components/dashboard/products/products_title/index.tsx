import { Select } from "antd";
import { products_title } from "../../../../utils";
import { useSearchParamsHandler } from "../../../../hooks/paramsApi";

const ProductsTitle = () => {
  const { setParam, getParam } = useSearchParamsHandler();

  const category = getParam("category") || "house-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const type = getParam("type") || "all-plans";
  const sort = getParam("sort") || "default-sorting";

  const handleChange = (value: string) => {
    setParam({
      category,
      range_min,
      range_max,
      type,
      sort: value // Faqat sortni yangilaymiz
    });
  };

  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-4 cursor-pointer">
        {products_title.map((value) => (
          <h3
            key={value.id}
            onClick={() =>
              setParam({ 
                category, 
                range_min, 
                range_max, 
                type: value.route_path,
                sort // type o'zgarganda sort o'chib ketmasligi uchun
              })
            }
            className={`hover:text-main transition-colors ${
              value.route_path === type ? "text-main font-bold" : "text-black"
            }`}
          >
            {value.title}
          </h3>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Sort by:</span>
        <Select
          onChange={handleChange}
          value={sort} // defaultValue o'rniga value ishlatish aniqroq ishlaydi
          style={{ width: 160 }}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsTitle;