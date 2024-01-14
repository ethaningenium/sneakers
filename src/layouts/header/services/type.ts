export type ProductType = {
  id: string;
  brand: string;
  title: string;
  description: string;
  images: string[];
  colors: ("black" | "brown" | "white" | "gray" | "red")[];
  sizes: number[];
  price: number;
  oldprice: number;
  rating: number;
  isnew: boolean;
};
