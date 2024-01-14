import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CartType } from "./types";

interface BearState {
  cartitems: CartType[];
  addItem: (item: CartType) => void;
  setItems: (items: CartType[]) => void;
  clearCart: () => void;
}

const useCart = create<BearState>()(
  devtools((set) => ({
    cartitems: [],
    addItem: (item) => {
      set((state) => ({ cartitems: [...state.cartitems, item] }));
    },
    setItems: (items) => {
      set(() => ({ cartitems: items }));
    },
    clearCart: () => {
      set(() => ({ cartitems: [] }));
    },
  }))
);

export default useCart;
