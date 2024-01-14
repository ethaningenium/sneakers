import { CartItem } from "./item";
import { useCartChange } from "../services/hook";
import { EmptyCart } from "./empty";

export const CartList = () => {
  const { clear, cartitems } = useCartChange();

  return (
    <div className="flex flex-col w-full md:w-2/3">
      <div className="flex items-center justify-between border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-semibold">Корзина</h1>
        <button className="font-light text-gray-500 text-sm" onClick={clear}>
          Очистить корзину
        </button>
      </div>
      <div className="w-full">
        {cartitems.length === 0 && <EmptyCart />}
        {cartitems.map((elem) => {
          return (
            <CartItem
              key={elem.id + elem.color + elem.size}
              id={elem.id}
              title={elem.title}
              price={elem.price}
              size={elem.size}
              color={elem.color}
              count={elem.count}
              image={elem.image}
            />
          );
        })}
      </div>
    </div>
  );
};
