import React from "react";

type PropsType = {
  color: string;
  currentColors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ColorCheckbox = (props: PropsType) => {
  return (
    <label htmlFor={props.color}>
      <input
        type="checkbox"
        id={props.color}
        name={props.color}
        value={props.color}
        checked={props.currentColors.includes(props.color)}
        onChange={() =>
          props.setColors(
            props.currentColors.includes(props.color)
              ? props.currentColors.filter((elem) => elem !== props.color)
              : [...props.currentColors, props.color]
          )
        }
      />
      <span className="ml-2">{props.color}</span>
    </label>
  );
};
