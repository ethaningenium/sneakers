import Promo from "./promo";
import Details from "./details";
import { useState } from "react";

export const CartSummary = () => {
  const [value, setValue] = useState(0);

  function setDiscountValue(elem: number) {
    setValue(elem);
  }
  return (
    <div className="w-full md:w-1/3 flex flex-col gap-6 ">
      <Promo setDiscountValue={setDiscountValue} />
      <Details discount={value} />
    </div>
  );
};
