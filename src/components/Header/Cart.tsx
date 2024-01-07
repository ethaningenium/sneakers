import { useEffect } from "react";
import { Heart, ShoppingBag } from "lucide-react";

import useLiked from "@/lib/likedStore";
import Icons from "./Icons";
import useCart from "@/lib/cartStore";
import {
  getCartFromLocalStorage,
  getLikedItemsFromLocalStorage,
} from "@/lib/ls";

const Cart = () => {
  const { likedItems, setInitialLikedItems } = useLiked();
  const { cartitems, setInitialCartItems } = useCart();

  useEffect(() => {
    setInitialLikedItems(getLikedItemsFromLocalStorage());
    setInitialCartItems(getCartFromLocalStorage());
  }, [setInitialLikedItems, setInitialCartItems]);

  return (
    <>
      <Icons
        Icon={ShoppingBag}
        count={cartitems.length}
        stroke={1.5}
        text="Корзина"
      />
      <Icons
        Icon={Heart}
        count={likedItems.length}
        stroke={1.5}
        text="Избранное"
      />
    </>
  );
};

export default Cart;
