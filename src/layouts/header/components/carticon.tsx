import Show from "@/components/Common/Show";
import { useCartChange } from "@/features/cart";
import { ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const CartIcons = () => {
  const { cartitems, initialLoad } = useCartChange();

  useEffect(() => {
    console.log("first load");
    initialLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Link to="/cart">
      <button className="flex gap-1 items-center h-6 relative cursor-pointer text-zinc-600 hover:text-zinc-900 duration-200">
        <Show when={cartitems.length !== 0}>
          <span className=" text-white text-[10px] bg-red-500 absolute px-[2px] h-3 rounded-full flex justify-center items-center -top-1 -left-1 select-none cursor-pointer">
            {cartitems.reduce((acc, elem) => {
              return acc + elem.count;
            }, 0)}
          </span>
        </Show>
        <ShoppingBag strokeWidth={1.5} />
        <span className=" text-sm">Корзина</span>
      </button>
    </Link>
  );
};
