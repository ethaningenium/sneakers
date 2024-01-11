import CartItem from "./CartItem";
import { CartType } from "@/lib/types/contract";

import useCart from "@/lib/zustand/cartStore";

const CartList = () => {
  const { cartitems, deleteItemFromCart } = useCart();

  function deleteItem(item: CartType) {
    deleteItemFromCart(item);
  }

  return (
    <div className="flex flex-col w-full md:w-2/3">
      <div className="flex items-center justify-between border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-semibold">Корзина</h1>
        <span className="font-light text-gray-500 text-sm">
          Очистить корзину
        </span>
      </div>
      <div>
        {cartitems.map((elem) => {
          return (
            <CartItem
              key={elem.id}
              id={elem.id}
              title={elem.title}
              price={elem.price}
              size={elem.size}
              color={elem.color}
              count={elem.count}
              image={elem.image}
              deleteItem={() => {
                deleteItem(elem);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartList;
