import { useSearchParams } from "react-router-dom";

export const useSearchParamsHandler = () => {
  const [params, setParams] = useSearchParams();

  const getParam = (path: string) => params.get(path);

  const setParam = (newParams: object) => {
    const currentParams = Object.fromEntries(params.entries());
    setParams({
      ...currentParams,
      ...newParams,
    });
  };

  return { getParam, setParam };
};