import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CartType = {
  id: string;
  size: number;
  color: string;
};

interface BearState {
  cartitems: CartType[];
  setItemToCart: (item: CartType) => void;
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
