import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

import { ProductType } from "@/lib/types/contract";

type PropsType = {
  item: ProductType;
  deleteItem: () => void;
};

const LikedDrawerItem: React.FC<PropsType> = (props) => {
  return (
    <div className="max-w-96 mb-4 flex gap-4 w-full relative rounded-2xl border border-gray-300 p-2 items-center">
      <button
        className="p-1 rounded-lg bg-gray-300 hover:bg-gray-500 absolute bottom-2 right-2 text-white duration-200 z-[80]"
        onClick={props.deleteItem}
      >
        <X size={16} />
      </button>
      <Link to={"/" + props.item.id}>
        <img
          src={props.item.images[0]}
          alt=""
          className=" rounded-xl h-16 object-cover aspect-square"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <h5 className="text-sm  font-light text-gray-600 leading-4">
          {props.item.title}
        </h5>
        <span className="text-xs font-semibold text-gray-700">
          {props.item.price} руб.
        </span>
      </div>
    </div>
  );
};

export default LikedDrawerItem;
