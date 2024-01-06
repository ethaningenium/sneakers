import React, { useState } from "react";
import { Heart } from "lucide-react";
import { ProductType } from "@/lib/contract";

const Card: React.FC<ProductType> = (props) => {
  const [isLiked, setLike] = useState(false);
  return (
    <div className="flex-1 min-w-72 flex-col gap-6 flex p-4 bg-white shadow-2xl shadow-black/10 rounded-2xl relative select-none">
      <button className="absolute top-6 right-6 rounded-full bg-white shadow-xl shadow-black/10 p-2 cursor-pointer transition">
        <Heart fill={isLiked ? "red" : "#D9D9D9"} stroke="none" />
      </button>
      <img
        src={props.images[0]}
        alt="seakers"
        className="h-56 w-full object-cover rounded-xl"
        loading="lazy"
      />
      <div className="w-full flex flex-col gap-1 items-center">
        <h3 className="text-sm font-light text-gray-500 line-clamp-1">
          {props.title}
        </h3>
        <h2 className="text-xl font-semibold text-zinc-800">
          {props.price} руб.
        </h2>
        <div className="w-full flex gap-2 mt-8">
          <button className="bg-gray-100 py-3 w-full rounded-xl">
            Подробнее
          </button>
          <button className="bg-orange-500 py-3 w-full rounded-xl text-white">
            {" "}
            в Корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
