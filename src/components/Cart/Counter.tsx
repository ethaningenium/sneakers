import useCart from "@/lib/zustand/cartStore";

type PropsType = {
  id: string;
  count: number;
  size: number;
  color: string;
};

const Counter: React.FC<PropsType> = ({ id, count, size, color }) => {
  const { cartItemDec, cartItemInc } = useCart();

  function inc() {
    cartItemInc(id, color, size);
  }

  function dec() {
    if (count > 1) {
      cartItemDec(id, color, size);
    }
  }

  return (
    <div className="flex gap-2 bg-gray-200 rounded-md">
      <button
        className="px-3 py-2 translate-x-2 text-sm font-light text-gray-700"
        onClick={dec}
      >
        -
      </button>
      <span className="px-3 py-2 text-sm font-light text-gray-700">
        {count}
      </span>
      <button
        className="px-3 py-2 -translate-x-2 text-sm font-light text-gray-700"
        onClick={inc}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
