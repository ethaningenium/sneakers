import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductType } from "../types/contract";

interface BearState {
  likedItems: string[];
  setItemToLikedList: (item: ProductType) => void;
  setInitialLikedItems: (items: string[]) => void;
  deleteItemFromLikedList: (id: string) => void;
}

const useLiked = create<BearState>()(
  devtools((set) => ({
    likedItems: [],
    setItemToLikedList: (item) => {
      set((state) => ({ likedItems: [...state.likedItems, item.id] }));
    },
    setInitialLikedItems: (items) => {
      set(() => ({ likedItems: items }));
    },
    deleteItemFromLikedList: (id) => {
      set((state) => ({
        likedItems: state.likedItems.filter((elem) => elem !== id),
      }));
    },
  }))
);

export default useLiked;
