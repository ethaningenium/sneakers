import { favoriteItemType } from "./type";

export const getLS = () => {
  const likedItems = localStorage.getItem("favoriteItems");
  if (likedItems) {
    try {
      const parsedLikedItems: favoriteItemType[] = JSON.parse(likedItems);
      return parsedLikedItems;
    } catch (error) {
      return [];
    }
  }
  return [];
};

export const setLS = (favoriteItems: favoriteItemType[]) => {
  localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
};
