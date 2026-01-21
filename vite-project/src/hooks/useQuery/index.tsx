import { useQuery, useMutation } from "@tanstack/react-query";
import { useAxios } from "../useAxios";
import type { LoginType } from "../../@types";

interface QueryHandlerType {
    url: string;
    pathname: string;    
    param?: object;
}

// 1. Ma'lumotlarni olish uchun (GET)
export const useQueryHandler = ({ url, pathname, param }: QueryHandlerType) => {
    const axios = useAxios();
    return useQuery({
        queryKey: [pathname, param],
        queryFn: () => axios({ url, method: 'GET', params: param }).then(res => res.data),
    }); 
}

// 2. LOGIN QILISH UCHUN (POST) - BU JUDA MUHIM!
export const useLoginMutate = () => {
    const axios = useAxios();
    
    return useMutation({
        mutationFn: (data: LoginType) => 
            axios({ 
                url: "/user/login", // O'zingizning API yo'lingizni yozing
                method: "POST", 
                data 
            }).then(res => res.data),
        onSuccess: (res) => {
            console.log("Login muvaffaqiyatli:", res);
        },
        onError: (err) => {
            console.error("Login xatosi:", err);
        }
    });
}