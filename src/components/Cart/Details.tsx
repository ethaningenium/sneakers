import useCart from "@/lib/zustand/cartStore";
import React from "react";

type PropsType = {
  promo: string;
};

const Details: React.FC<PropsType> = (props) => {
  const promos = ["abc", "2024", "react", "zustand", "typescript", "nextjs"];
  const { cartitems } = useCart();
  const discount = promos.includes(props.promo) ? 0.3 : 0;
  return (
    <div className="w-full flex p-12 flex-col gap-4 bg-white shadow-2xl shadow-black/10">
      <h3 className="text-xl font-medium">Детали</h3>
      <div className="flex flex-col gap-2">
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
          <span className="text-gray-700 font-medium">{discount * 100} %</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-light"> Итого:</span>
          <span className="text-gray-700 font-medium">
            {cartitems.reduce((acc, item) => acc + item.count * item.price, 0) *
              (1 - discount)}
            руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
