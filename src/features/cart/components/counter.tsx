type PropsType = {
  count: number;
  inc: () => void;
  dec: () => void;
};

export const Counter: React.FC<PropsType> = ({ count, inc, dec }) => {
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
