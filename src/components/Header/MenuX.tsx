import { Menu as Hamburger } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/tools/utils";
import MenuContent from "./MenuContentX";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden overflow-hidden">
      <Hamburger
        onClick={() => setOpen(true)}
        className="w-auto h-auto p-2 hover:bg-zinc-100 rounded-xl duration-200 active:bg-zinc-200 cursor-pointer"
      />
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "fixed top-0 left-0 w-screen h-dvh backdrop-blur opacity-0 duration-300 hidden z-40",
          {
            "opacity-100 flex": open,
          }
        )}
      ></div>
      <div
        className={cn(
          "w-72 bg-white z-50 p-4 h-dvh fixed top-0 right-0 shadow-2xl shadow-black/20 duration-300",
          {
            "-right-80": !open,
          }
        )}
      >
        <MenuContent setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Menu;
