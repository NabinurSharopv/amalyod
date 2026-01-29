// 1. Foydalanuvchi ma'lumotlari uchun type (Kuki va Redux-da saqlanadi)
export interface AuthType {
  _id?: string;
  name: string;
  surname: string;
  email: string;
  confrm_password?: string;
  password?: string;
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}

export interface LoginType {
  email: string;
  password?: string;
}

export interface RegisterType {
  name: string;
  surname: string;
  email: string;
  password?: string;
}

export interface HeroMockType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  big_img_url: string;
  small_img_url: string;
}

export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  _id: string;
}

export interface QueryType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export interface DicountFlowerType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}

export interface ProductType {
  _id: string;
  title: string;
  price: number;
  main_image: string;
  discount: boolean;
  discount_price?: number;
  short_description: string;
  description: string;
  detailed_images: string[];
  rate: number;
  views: number;
  tags: [];
  comments: [];
  sold_times: number;
  created_by: string;
  created_at: string;
  category: string;
  count?: number | undefined;
  userPrice?: number;
}

export interface  ProductsTitleType {
id:number;
title: string;
route_path:string;
}