import type { HeroMockType, ProductsTitleType } from "../@types";

export const hero_mock: HeroMockType[] = [
  {
    id: 0,
    title: "Let's Make a Better",
    subTitle: "WELCOME TO GREENSHOP",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle.",
    buttonText: "SHOP NOW",
    big_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b",
    small_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=90",
  },
  {
    id: 1,
    title: "LET'S LIVE IN A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle.",
    buttonText: "LET'S START",
    big_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=0b",
    small_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=90",
  },
  {
    id: 2,
    title: "LET'S OBSERVE A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle.",
    buttonText: "GET CREDITS",
    big_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower3.png?alt=media&token=0b",
    small_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower4.png?alt=media&token=90",
  },
];


export const products_title:ProductsTitleType[] = [
  {
    id:1,
    title: "All Plans", 
    route_path: "all-plants",
  },
    {
    id:2,
    title: "New Arrivals",
    route_path: "new-arrivals",
  },
  {
    id:3,
    title: "Sale",
    route_path: "sale",
  }
]