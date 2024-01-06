import useLiked from "@/lib/likedStore";
import Icons from "./Icons";
import { Heart, ShoppingBag } from "lucide-react";
import useCart from "@/lib/cartStore";

const Cart = () => {
  const { likedItems } = useLiked();
  const { cartitems } = useCart();
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
