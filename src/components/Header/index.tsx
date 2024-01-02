import Logo from "../Logo";
import Input from "./Input";
import Top from "./Top";
import Icons from "./Icons";
import { ShoppingBag, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <Top />
      <div className="container py-3 flex gap-20 items-center">
        <Logo width={170} />
        <Input />
        <div className="flex gap-6">
          <Icons Icon={ShoppingBag} count={0} stroke={1.5} text="Корзина" />
          <Icons Icon={Heart} count={1} stroke={1.5} text="Избранное" />
        </div>
      </div>
    </header>
  );
};

export default Header;
