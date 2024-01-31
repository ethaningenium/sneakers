import { ChevronDown } from "lucide-react";
import React from "react";
import { ColorCheckbox } from "./color-checkbox";

type PropsType = {
  currentColors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Color = (props: PropsType) => {
  const colors = ["white", "black", "red", "brown", "gray"];

  return (
    <div className="w-full bg-white py-2 flex flex-col gap-3 rounded-lg">
      <div className="w-full flex items-center justify-between">
        <span>Цена</span>
        <ChevronDown />
      </div>
      <div className="flex flex-col gap-2">
        {colors.map((color, i) => {
          return (
            <ColorCheckbox
              key={i}
              color={color}
              setColors={props.setColors}
              currentColors={props.currentColors}
            />
          );
        })}
      </div>
    </div>
  );
};
