import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductType, LikedItemType } from "../types/contract";

interface BearState {
  likedItems: LikedItemType[];
  setItemToLikedList: (item: ProductType) => void;
  setInitialLikedItems: (items: LikedItemType[]) => void;
  deleteItemFromLikedList: (id: LikedItemType) => void;
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
