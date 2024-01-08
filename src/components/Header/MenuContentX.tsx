import { X } from "lucide-react";
import { Link } from "react-router-dom";

import routes from "@/assets/routes.json";
import Input from "./InputX";
import Cart from "./CartX";

type MenuContentProps = {
  setOpen: (elem: boolean) => void;
};

const MenuContent: React.FC<MenuContentProps> = (props) => {
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
        {routes.map((elem, i) => {
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
