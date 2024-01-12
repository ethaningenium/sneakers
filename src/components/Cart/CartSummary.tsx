import Promo from "./Promo";
import Details from "./Details";
import { useState } from "react";

const CartSummary = () => {
  const [value, setValue] = useState("");

  function setInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <div className="w-full md:w-1/3 flex flex-col gap-6 ">
      <Promo value={value} setInputValue={setInputValue} />
      <Details promo={value} />
    </div>
  );
};

export default CartSummary;
