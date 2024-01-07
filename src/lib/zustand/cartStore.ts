import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CartType } from "../contract";

interface BearState {
  cartitems: CartType[];
  setItemToCart: (item: CartType) => void;
  setInitialCartItems: (items: CartType[]) => void;
  deleteItemFromCart: (id: string) => void;
}

const useCart = create<BearState>()(
  devtools((set) => ({
    cartitems: [],
    setItemToCart: (item) => {
      set((state) => ({ cartitems: [...state.cartitems, item] }));
    },
    setInitialCartItems: (items) => {
      set(() => ({ cartitems: items }));
    },
    deleteItemFromCart: (id) => {
      set((state) => ({
        cartitems: state.cartitems.filter((elem) => elem.id !== id),
      }));
    },
  }))
);

export default useCart;
