import { useEffect } from "react";
import { ShoppingBag } from "lucide-react";

import useLiked from "@/lib/zustand/likedStore";
import Icons from "./Icons";
import useCart from "@/lib/zustand/cartStore";
import {
  getCartFromLocalStorage,
  getLikedItemsFromLocalStorage,
} from "@/lib/tools/ls";
import LikedItemDrawer from "./LikedItemDrawerX";
import { Link } from "react-router-dom";

const Cart = () => {
  const { setInitialLikedItems } = useLiked();
  const { cartitems, setInitialCartItems } = useCart();

  useEffect(() => {
    setInitialLikedItems(getLikedItemsFromLocalStorage());
    setInitialCartItems(getCartFromLocalStorage());
  }, []);

  return (
    <>
      <button>
        <Link to={"/cart"}>
          <Icons
            Icon={ShoppingBag}
            count={cartitems.length}
            stroke={1.5}
            text="Корзина"
          />
        </Link>
      </button>

      <LikedItemDrawer />
    </>
  );
};

export default Cart;
