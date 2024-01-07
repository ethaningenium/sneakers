import { useEffect } from "react";
import { ShoppingBag } from "lucide-react";

import useLiked from "@/lib/likedStore";
import Icons from "./Icons";
import useCart from "@/lib/cartStore";
import {
  getCartFromLocalStorage,
  getLikedItemsFromLocalStorage,
} from "@/lib/ls";
import LikedItemDrawer from "./LikedItemDrawer";

const Cart = () => {
  const { setInitialLikedItems } = useLiked();
  const { cartitems, setInitialCartItems } = useCart();

  useEffect(() => {
    setInitialLikedItems(getLikedItemsFromLocalStorage());
    setInitialCartItems(getCartFromLocalStorage());
  }, [setInitialLikedItems, setInitialCartItems]);

  return (
    <>
      <button>
        <Icons
          Icon={ShoppingBag}
          count={cartitems.length}
          stroke={1.5}
          text="Корзина"
        />
      </button>

      <LikedItemDrawer />
    </>
  );
};

export default Cart;
