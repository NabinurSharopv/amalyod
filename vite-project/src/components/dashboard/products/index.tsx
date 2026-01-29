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
      // Pathname ichidagi Range_max-Range_max xatosini tuzatdik
      pathname: `products-${category}-${range_min}-${range_max}-${type}-${sort}`,
      param: {
        range_min, // API-ga ketadigan nomlar backend bilan bir xil bo'lishi kerak
        range_max,
        type,
        sort,
      },
    });

  const { productLoader } = LoaderApi();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading products...</div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-center text-red-500 p-8">
        <h3>Error loading products</h3>
      </div>
    );
  }
  return (
    <div>
      <ProductsTitle />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
        {isLoading || isError
          ? productLoader()
          : data?.map((value) => <Card key={value._id} {...value} />)}
        {productLoader()}
      </div>
    </div>
  );
};

export default Products;
