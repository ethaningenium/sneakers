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

export type CartType = {
  id: string;
  title: string;
  price: number;
  image: string;
  size: number;
  color: string;
  count: number;
};

export type LikedItemType = string;
