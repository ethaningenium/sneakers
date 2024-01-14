import React, { useState } from "react";
import { useCartChange } from "@/features/cart";

import { ProductType } from "@/lib/types/contract";
import { cn } from "@/lib/tools/utils";

export const Description: React.FC<ProductType> = (props) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState<string | null>(null);
  const [currentSize, setCurrentSize] = useState<number | null>(null);
  const { add, cartitems } = useCartChange();

  const thisProductInCartCount = cartitems.reduce((acc, elem) => {
    if (elem.id === props.id) {
      acc += elem.count;
    }
    return acc;
  }, 0);

  const colorsToTWColors = {
    black: "bg-black hover:bg-zinc-800 text-white",
    brown: "bg-stone-600 hover:bg-stone-500 text-white",
    white: "bg-white hover:bg-zinc-100 border-[1px] border-zinc-300",
    gray: "bg-gray-600 hover:bg-gray-500 text-white",
    red: "bg-red-700 hover:bg-red-600 text-white",
  };

  function handleColorPick(color: string) {
    currentColor === color ? setCurrentColor(null) : setCurrentColor(color);
  }

  function handleSizePick(size: number) {
    currentSize === size ? setCurrentSize(null) : setCurrentSize(size);
  }

  function handleAddToCart() {
    if (currentColor && currentSize) {
      add({
        id: props.id,
        color: currentColor,
        size: currentSize,
        title: props.title,
        price: props.price,
        image: props.images[0],
        count: 1,
      });
    }
  }
  return (
    <div className="flex-1 flex flex-col items-start  gap-6 justify-between md:w-auto w-full">
      <div className="flex flex-col gap-3">
        <span className="text-xs text-gray-400 font-light">{props.brand}</span>
        <h1 className="lg:text-4xl text-3xl font-semibold text-gray-900">
          {props.title}
        </h1>
        <div className="flex gap-4 items-center">
          <span className="text-2xl font-semibold text-gray-800">
            {props.price} руб.
          </span>
          <span className="font-light text-gray-400 before:top-1/2 before:left-0 before:content-[''] before:absolute relative  before:w-full before:h-[2px] before:bg-zinc-500">
            {props.oldprice} руб.
          </span>
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <span className="text-lg font-medium text-zinc-700">Размеры:</span>
          <div className="flex flex-wrap gap-3">
            {props.sizes.map((size, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleSizePick(size)}
                  className={cn(
                    "px-4 rounded-xl py-2 border-[1px] border-zinc-300 cursor-pointer transition hover:bg-zinc-100",
                    {
                      "border-none bg-orange-500 text-white hover:bg-orange-400":
                        currentSize === size,
                    }
                  )}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2 mb-12">
          <span className="text-lg font-medium text-zinc-700">Цвета:</span>
          <div className="flex flex-wrap gap-3">
            {props.colors.map((color, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleColorPick(color)}
                  className={cn(
                    "px-4 rounded-xl py-2 hover:bg-zinc-200 cursor-pointer transition bg-zinc-100",
                    {
                      [colorsToTWColors[color]]: currentColor === color,
                    }
                  )}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>
        <div className="text-xs font-light flex flex-col gap-2 text-gray-600">
          <p className={cn({ "line-clamp-5": !isDescriptionOpen })}>
            {props.description}
          </p>{" "}
          <span
            className="hover:text-gray-900 cursor-pointer"
            onClick={() => setIsDescriptionOpen((prev) => !prev)}
          >
            {isDescriptionOpen ? "Свернуть" : "Развернуть"}
          </span>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={currentColor === null || currentSize === null}
        className=" flex gap-2 items-center py-4 px-6 rounded-2xl bg-orange-500 hover:bg-orange-400 font-semibold text-white disabled:bg-gray-300"
      >
        {thisProductInCartCount ? (
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white text-orange-400 text-xs  ">
            {thisProductInCartCount}
          </span>
        ) : null}
        {currentColor === null || currentSize === null
          ? "Выберите цвет и размер"
          : "Добавить в корзину"}
      </button>
    </div>
  );
};
