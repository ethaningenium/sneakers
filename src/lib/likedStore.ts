import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductType } from "./contract";

interface BearState {
  likedItems: ProductType[];
  setItemToLikedList: (item: ProductType) => void;
  deleteItemFromLikedList: (id: string) => void;
}

const useLiked = create<BearState>()(
  devtools((set) => ({
    likedItems: [],
    setItemToLikedList: (item) => {
      set((state) => ({ likedItems: [...state.likedItems, item] }));
    },
    deleteItemFromLikedList: (id) => {
      set((state) => ({
        likedItems: state.likedItems.filter((elem) => elem.id !== id),
      }));
    },
  }))
);

export default useLiked;
