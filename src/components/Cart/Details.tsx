import useCart from "@/lib/zustand/cartStore";
import React from "react";

type PropsType = {
  discount: number;
};

const Details: React.FC<PropsType> = (props) => {
  const { cartitems } = useCart();

  return (
    <div className="w-full flex p-12 flex-col items-center gap-8 bg-white shadow-2xl shadow-black/10">
      <div className="flex w-full">
        <h3 className="text-xl font-medium text-left">Детали</h3>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-light"> Товаров в корзине:</span>
          <span className="text-gray-700 font-medium">
            {cartitems.reduce((acc, item) => acc + item.count, 0)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-light"> Стоимость:</span>
          <span className="text-gray-700 font-medium">
            {cartitems.reduce((acc, item) => acc + item.count * item.price, 0)}{" "}
            руб.
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-light"> Промокод:</span>
          <span className="text-gray-700 font-medium">
            {props.discount * 100} %
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-light"> Итого:</span>
          <span className="text-gray-700 font-medium">
            {Math.floor(
              cartitems.reduce(
                (acc, item) => acc + item.count * item.price,
                0
              ) *
                (1 - props.discount)
            )}
            руб.
          </span>
        </div>
      </div>
      <button className="px-5 py-3 rounded-2xl bg-orange-500 text-white">
        <span>Оформить заказ</span>
      </button>
    </div>
  );
};

export default Details;
