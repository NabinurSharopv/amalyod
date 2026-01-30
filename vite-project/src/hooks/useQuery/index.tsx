import { useMutation, useQuery as useReactQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";
import type { LoginType } from "../../@types";

// options ichiga "param" ni ham qo'shdik
export const useQueryHandler = (options: { url: string; pathname: string; param?: object }) => {
  const request = useAxios();
  
  return useReactQuery({
    queryKey: [options.pathname], // pathname o'zgarganda so'rov qayta ketadi
    queryFn: () => request({
      url: options.url,
      method: "GET",
      param: options.param, // MUHIM: Parametrlarni bu yerda uzatish kerak!
    }),
  });
};

export const useQuery = (options: { url: string; pathname: string }) => {
  const request = useAxios();
  
  return useReactQuery({
    queryKey: [options.pathname],
    queryFn: () => request({
      url: options.url,
      method: "GET"
    }),
  });
};

export const useLoginMutate = () => {
  const request = useAxios();
  
  return useMutation({
    mutationFn: (loginData: LoginType) => 
      request({
        url: "/user/login", 
        method: "POST",
        body: loginData
      }),
  });
}