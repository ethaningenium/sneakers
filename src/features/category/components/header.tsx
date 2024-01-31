import { cn } from "@/lib/tools/utils";
import React from "react";

export const Header = () => {
  const categories = [
    "Running Shoes",
    "Basketball",
    "Sneakers",
    "Sandals",
    "Boots",
  ];
  const [checked, setChecked] = React.useState<string>("");
  return (
    <div className="w-full flex flex-col py-4 gap-4">
      <h1 className="text-3xl text-zinc-700 ">Каталог</h1>
      <div className="flex gap-4">
        {categories.map((category) => {
          return (
            <span
              key={category}
              onClick={() => setChecked(category)}
              className={cn(
                "text-base text-zinc-500 px-6 py-3 rounded-xl bg-gray-100 cursor-pointer transition hover:bg-gray-200",
                {
                  "bg-zinc-700 text-white hover:bg-zinc-600":
                    checked === category,
                }
              )}
            >
              {category}
            </span>
          );
        })}
      </div>
    </div>
  );
};
