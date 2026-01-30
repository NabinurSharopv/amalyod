import type { ProductType, QueryType } from "../../../@types";
import { LoaderApi } from "../../../generic/loader";
import { useSearchParamsHandler } from "../../../hooks/paramsApi";
import { useQueryHandler } from "../../../hooks/useQuery";
import Card from "./card";
import ProductsTitle from "./products_title";

const Products = () => {
  const { getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const type = getParam("type") || "all-plans";
  const sort = getParam("sort") || "default-sorting";

  const { data, isLoading, isError }: QueryType<ProductType[]> =
    useQueryHandler({
      url: `flower/category/${category}`,
      pathname: `products-${category}-${range_min}-${range_max}-${type}-${sort}`,
      param: { range_min, range_max, type, sort },
    });

  const { productLoader } = LoaderApi();

  return (
    <div className="w-full">
      <ProductsTitle />
      {/* Gap-6 oraliq uchun eng yaxshisi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading || isError
          ? productLoader()
          : data?.map((value: any) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;