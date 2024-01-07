import { useEffect, useState } from "react";
import useLiked from "./likedStore";
import { ProductType } from "./contract";
import {
  setLikedItemsToLocalStorage,
  deleteLikedItemFromLocalStorage,
} from "./ls";

type LikedItemsHookType = (
  props: ProductType
) => [isLiked: boolean, handleLikeClick: () => void];

export const useLikedItems: LikedItemsHookType = (props) => {
  const [isLiked, setLike] = useState(false);
  const { likedItems, setItemToLikedList, deleteItemFromLikedList } =
    useLiked();

  useEffect(() => {
    likedItems.includes(props.id) ? setLike(true) : setLike(false);
  }, [likedItems, props]);

  function handleLikeClick() {
    if (isLiked) {
      deleteItemFromLikedList(props.id);
      deleteLikedItemFromLocalStorage(props.id);
    } else {
      setItemToLikedList(props);
      setLikedItemsToLocalStorage(props.id);
    }
  }

  return [isLiked, handleLikeClick];
};
