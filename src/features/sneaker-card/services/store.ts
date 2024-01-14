import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { favoriteItemType } from "./type";

interface IfavoriteStore {
  favoriteItems: favoriteItemType[];
  setList: (items: favoriteItemType[]) => void;
}

const useFavoriteStore = create<IfavoriteStore>()(
  devtools((set) => ({
    favoriteItems: [],
    setList: (items) => {
      set(() => ({ favoriteItems: items }));
    },
  }))
);

export default useFavoriteStore;
