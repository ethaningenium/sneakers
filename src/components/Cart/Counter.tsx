import { useState } from "react";

type PropsType = {
  count: number;
};

const Counter: React.FC<PropsType> = (props) => {
  const [count, setCount] = useState(props.count);

  function inc() {
    setCount((prev) => prev + 1);
  }

  function dec() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div className="flex gap-2 bg-gray-200 rounded-md">
      <button
        className="px-3 py-2 translate-x-2 text-sm font-light text-gray-700"
        onClick={dec}
      >
        -
      </button>
      <span className="px-3 py-2 text-sm font-light text-gray-700">
        {count}
      </span>
      <button
        className="px-3 py-2 -translate-x-2 text-sm font-light text-gray-700"
        onClick={inc}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
