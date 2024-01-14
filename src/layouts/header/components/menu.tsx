import { Menu as Hamburger, X } from "lucide-react";

import {
  Menu,
  MenuBody,
  MenuHeader,
  MenuTrigger,
  MenuOverlay,
  MenuDrawer,
  MenuContent,
  MenuCloser,
} from "@/components/Common/Menu";
import routes from "../assets/routes.json";
import { Input } from "./input";
import { Link } from "react-router-dom";
import { CartIcons } from "./carticon";
import { FavoriteIcon } from "./favoriteicon";

export const SideMenu = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Hamburger className="w-auto h-auto p-2 hover:bg-zinc-100 rounded-xl duration-200 active:bg-zinc-200 cursor-pointer" />
      </MenuTrigger>
      <MenuOverlay />
      <MenuDrawer>
        <MenuContent className="pt-4 px4">
          <MenuHeader>
            <MenuCloser className="w-full flex justify-end">
              <X className="tetx-zinc-400 hover:text-zinc-600 active:text-zinc-900" />
            </MenuCloser>
          </MenuHeader>
          <MenuBody className="flex flex-col gap-16">
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
              <CartIcons />
              <FavoriteIcon />
            </div>
          </MenuBody>
        </MenuContent>
      </MenuDrawer>
    </Menu>
  );
};
