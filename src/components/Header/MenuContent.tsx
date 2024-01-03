import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { routePath } from "./route";
import Input from "./Input";

import Cart from "./Cart";

const MenuContent = (props: { setOpen: (elem: boolean) => void }) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-8">
      <div className="w-full flex justify-end">
        <X
          className="tetx-zinc-400 hover:text-zinc-600 active:text-zinc-900"
          onClick={() => props.setOpen(false)}
        />
      </div>

      <div className="flex flex-col w-full gap-16 items-center">
        <Input />
      </div>
      <div className="flex flex-col items-center gap-4">
        {routePath.map((elem, i) => {
          return (
            <Link key={i} to={elem.path} className="text-zinc-600">
              {elem.title}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-6 mt-24">
        <Cart />
      </div>
    </div>
  );
};

export default MenuContent;
