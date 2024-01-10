import { Link } from "react-router-dom";

import Logo from "@/components/Common/Logo";
import Input from "./InputX";
import Top from "./TopHeaderX";
import Menu from "./MenuX";
import Cart from "./CartX";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center sticky top-0 z-30 bg-white shadow-xl shadow-slate-800/5">
      <Top />
      <div className="px-4 w-full md:px-0 md:container py-3 flex justify-between md:justify-normal md:gap-8 lg:gap-20 items-center">
        <Link to={"/"}>
          <Logo className="w-32 md:w-48" />
        </Link>

        <div className="w-full hidden md:flex">
          <Input />
        </div>

        <div className=" gap-6 hidden md:flex">
          <Cart />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
