import { ChevronDown } from "lucide-react";
import { RangeSlider } from "./slider";
import { Color } from "./color";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Filters = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [value, setValue] = React.useState<number[]>([0, 10000]);
  const [currentColors, setColors] = React.useState<string[]>([
    "white",
    "black",
    "red",
    "brown",
    "gray",
  ]);

  function updateSearchParams() {
    queryParams.set("minPrice", String(value[0]));
    queryParams.set("maxPrice", String(value[1]));
    queryParams.set("colors", currentColors.toString());
    const newParams = queryParams.toString();
    const newUrl = `${location.pathname}?${newParams}`;
    navigate(newUrl);
  }

  useEffect(() => {
    const minPrice = queryParams.get("minPrice");
    const maxPrice = queryParams.get("maxPrice");
    const colors = queryParams.get("colors");
    if (minPrice === null || maxPrice === null || colors === null) {
      return;
    }
    setValue([Number(minPrice), Number(maxPrice)]);
    setColors(colors.split(","));
  }, []);

  return (
    <div className="w-72 p-4 rounded-lg flex flex-col gap-4 ">
      <div className="flex w-full gap-6 items-center justify-between text-gray-700">
        <h2 className="text-2xl">Фильтры</h2>
        <ChevronDown />
      </div>
      <RangeSlider setValue={setValue} value={value} />
      <Color setColors={setColors} currentColors={currentColors} />
      <button
        onClick={updateSearchParams}
        className="w-full bg-orange-500 text-white disabled:text-zinc-500 p-2 rounded-lg  disabled:bg-gray-200 "
      >
        Применить
      </button>
    </div>
  );
};
