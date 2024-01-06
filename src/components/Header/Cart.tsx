import useLiked from "@/lib/likedStore";
import Icons from "./Icons";
import { Heart, ShoppingBag } from "lucide-react";

const Cart = () => {
  const likedItems = useLiked((state) => state.likedItems);
  return (
    <>
      <Icons Icon={ShoppingBag} count={0} stroke={1.5} text="Корзина" />
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
