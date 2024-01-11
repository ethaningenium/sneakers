import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import CartItem from "./CartItem";
import { fetchAll } from "@/lib/fetch";
import { ProductType } from "@/lib/contract";
import { useEffect } from "react";

const CartList = () => {
  const [items, setItems] = useState<ProductType[]>([]);
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  function deleteItem(id: string) {
    setItems((prev) => {
      return prev.filter((elem) => {
        return elem.id !== id;
      });
    });
  }

  return (
    <div className="flex flex-col w-2/3">
      <div className="flex items-center justify-between border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-semibold">Корзина</h1>
        <span className="font-light text-gray-500 text-sm">
          Очистить корзину
        </span>
      </div>
      <div>
        {items.map((elem) => {
          return (
            <CartItem
              key={elem.id}
              id={elem.id}
              title={elem.title}
              price={elem.price}
              size={elem.sizes[0]}
              color={elem.colors[0]}
              count={1}
              image={elem.images[0]}
              deleteItem={() => {
                deleteItem(elem.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartList;
