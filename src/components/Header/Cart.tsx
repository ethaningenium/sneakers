import Icons from "./Icons";
import { Heart, ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <>
      <Icons Icon={ShoppingBag} count={0} stroke={1.5} text="Корзина" />
      <Icons Icon={Heart} count={1} stroke={1.5} text="Избранное" />
    </>
  );
};

export default Cart;
