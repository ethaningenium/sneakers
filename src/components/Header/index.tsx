import Logo from "../Logo";
import Input from "./Input";
import Top from "./Top";
import Menu from "./Menu";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <Top />
      <div className="px-4 w-full md:px-0 md:container py-3 flex justify-between md:justify-normal md:gap-8 lg:gap-20 items-center">
        <Logo className="w-28 md:w-64" />
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
