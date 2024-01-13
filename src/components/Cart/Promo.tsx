import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

import Show from "@/components/Common/Show";

type PropsType = {
  setDiscountValue: (elem: number) => void;
};

type IFormInput = {
  promo: string;
};

const promos = ["abc", "2024", "react", "zustand", "typescript", "nextjs"];

const Promo: React.FC<PropsType> = (props) => {
  const [promoOpen, setPromoOpen] = useState(true);
  const [isDiscount, setDiscount] = useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const discount = promos.includes(data.promo) ? 0.3 : 0;
    props.setDiscountValue(discount);
    setDiscount(true);
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4 w-full select-none">
      <div
        className="flex gap-2 items-center text-gray-700 cursor-pointer"
        onClick={() => setPromoOpen((prev) => !prev)}
      >
        <span>Промокод</span>
        <ChevronUp size={16} />
      </div>
      <Show when={promoOpen}>
        <form className="w-full flex gap-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            disabled={isDiscount}
            {...register("promo")}
            type="text"
            placeholder="Введите промокод"
            className="select-text w-full pl-4 py-3 bg-gray-100 rounded-xl outline-none border border-gray-200 focus:border-gray-400"
          />
          <button
            disabled={isDiscount}
            type="submit"
            className="px-4 py-3 bg-gray-700 rounded-xl text-white disabled:bg-green-700"
          >
            {isDiscount ? "Активирован" : "Применить"}
          </button>
        </form>
      </Show>
    </div>
  );
};

export default Promo;
