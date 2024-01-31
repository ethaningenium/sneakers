import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { ChevronDown } from "lucide-react";

function valuetext(value: number) {
  return `${value}°C`;
}

type PropsType = {
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  value: number[];
};

export function RangeSlider(props: PropsType) {
  const handleChange = (_: Event, newValue: number | number[]) => {
    props.setValue(newValue as number[]);
  };

  function minInputHandle(value: string) {
    const num = Number(value);
    if (Number.isNaN(num)) return;
    if (num >= 0) {
      props.setValue((prev) => [num, prev[1]]);
    }
  }
  function maxInputHandle(value: string) {
    const num = Number(value);
    if (Number.isNaN(num)) return;
    if (num <= 10000) {
      props.setValue((prev) => [prev[0], num]);
    }
  }

  return (
    <div className="w-full bg-white py-2 flex flex-col gap-3 items-center rounded-lg">
      <div className="w-full flex items-center justify-between">
        <span>Цена</span>
        <ChevronDown />
      </div>
      <div className=" flex gap-2">
        <input
          value={props.value[0]}
          onChange={(e) => minInputHandle(e.target.value)}
          className="w-full bg-zinc-100 pl-3 placeholder:text-zinc-300 rounded-lg py-2 text-sm"
          placeholder="Цена от: "
        />
        <input
          value={props.value[1]}
          onChange={(e) => maxInputHandle(e.target.value)}
          className="w-full bg-zinc-100 pl-3 placeholder:text-zinc-300 rounded-lg py-2 text-sm"
          placeholder="Цена до: "
        />
      </div>
      <Box sx={{ width: "90%" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={props.value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          size="small"
          min={0}
          max={10000}
          color="info"
        />
      </Box>
    </div>
  );
}
