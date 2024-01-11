import { X } from "lucide-react";
import Counter from "./Counter";

export type CartType = {
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
    <div className="flex justify-between items-center border-r border-b border-gray-200 py-4 pr-4">
      <div className="flex gap-4">
        <img
          className="w-32 object-contain rounded-lg"
          src={props.image}
          alt="NIKE AIR JORDAN 13 RETRO"
        />
        <div className="flex flex-col justify-center gap-2 h-auto">
          <h3 className="font-semibold text-gray-700">{props.title}</h3>
          <span className="text-xs text-gray-500">Размер: {props.size}</span>
          <span className="text-xs text-gray-500">Цвет: {props.color}</span>
        </div>
      </div>

      <div className="flex gap-20 items-center">
        <Counter count={props.count} />

        <span className="text-lg font-semibold">{props.price} руб.</span>
        <button className="text-gray-500" onClick={props.deleteItem}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
