import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductType } from "./contract";

interface BearState {
  cartitems: ProductType[];
  setItemToCart: (item: ProductType) => void;
  deleteItemFromCart: (id: string) => void;
}

const useCart = create<BearState>()(
  devtools((set) => ({
    cartitems: [],
    setItemToCart: (item) => {
      set((state) => ({ cartitems: [...state.cartitems, item] }));
    },
    deleteItemFromCart: (id) => {
      set((state) => ({
        cartitems: state.cartitems.filter((elem) => elem.id !== id),
      }));
    },
  }))
);

export default useCart;
