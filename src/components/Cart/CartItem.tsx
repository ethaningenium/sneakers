import { X } from "lucide-react";
import Counter from "./Counter";

type CartType = {
  id: string;
  price: number;
  title: string;
  image: string;
  size: number;
  color: string;
  count: number;
  deleteItem: () => void;
};

const CartItem: React.FC<CartType> = (props) => {
  return (
    <div className="flex md:gap-0 gap-6 md:justify-between md:items-center md:flex-row flex-col border-r border-b border-gray-200 py-4 pr-8">
      <div className="flex gap-4">
        <img
          className="w-32 h-auto object-cover rounded-lg"
          src={props.image}
          alt="NIKE AIR JORDAN 13 RETRO"
        />
        <div className="flex flex-col justify-center gap-2 h-auto">
          <h3 className="font-semibold text-gray-700">{props.title}</h3>
          <span className="text-xs text-gray-500">Размер: {props.size}</span>
          <span className="text-xs text-gray-500">Цвет: {props.color}</span>
        </div>
      </div>

      <div className="flex lg:gap-20 gap-4 items-center justify-between md:justify-normal">
        <div className="flex xl:flex-row flex-row md:flex-col items-center gap-12 md:gap-4 xl:gap-12">
          <Counter
            count={props.count}
            id={props.id}
            size={props.size}
            color={props.color}
          />

          <span className="text-lg font-semibold">
            {props.price * props.count} руб.
          </span>
        </div>
        <button className="text-gray-500" onClick={props.deleteItem}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
