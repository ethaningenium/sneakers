import { useState } from "react";
import { ChevronUp } from "lucide-react";

import Show from "@/components/Common/Show";

type PropsType = {
  value: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Promo: React.FC<PropsType> = (props) => {
  const [promoOpen, setPromoOpen] = useState(true);

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
        <div className="w-full flex gap-2">
          <input
            type="text"
            value={props.value}
            onChange={props.setInputValue}
            placeholder="Введите промокод"
            className="select-text w-full pl-4 py-3 bg-gray-100 rounded-xl outline-none border border-gray-200 focus:border-gray-400"
          />
          <button className="px-4 py-3 bg-gray-700 rounded-xl text-white">
            Применить
          </button>
        </div>
      </Show>
    </div>
  );
};

export default Promo;
