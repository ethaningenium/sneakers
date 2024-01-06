import { useEffect, useState } from "react";
import useLiked from "./likedStore";
import { ProductType } from "./contract";

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
    isLiked ? deleteItemFromLikedList(props.id) : setItemToLikedList(props);
  }

  return [isLiked, handleLikeClick];
};
