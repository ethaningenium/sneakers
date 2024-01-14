import { getLS, setLS } from "./local";
import useFavoriteStore from "./store";
import { favoriteItemType } from "./type";

export const useFavorite = () => {
  const { favoriteItems, setList } = useFavoriteStore();

  function isFavorite(item: favoriteItemType) {
    return favoriteItems.includes(item);
  }

  function toggle(item: favoriteItemType) {
    if (favoriteItems.includes(item)) {
      const newItems = favoriteItems.filter((elem) => elem !== item);
      setList(newItems);
      setLS(newItems);
    } else {
      setList([...favoriteItems, item]);
      setLS([...favoriteItems, item]);
    }
  }

  function setInitial() {
    const items = getLS();
    setList(items);
  }

  return {
    favoriteItems,
    setInitial,
    toggle,
    isFavorite,
  };
};
