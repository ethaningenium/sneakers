import { Search, X } from "lucide-react";
import { useRef, useState } from "react";
import Show from "../Show";

const Input = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full flex bg-zinc-100 py-3 rounded-xl relative">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        ref={inputRef}
        type="text"
        placeholder="Что хотите найти?"
        className="bg-transparent w-full placeholder:text-zinc-400 focus:outline-none pl-8"
      />
      <Show when={!!value}>
        <X
          className="absolute right-16 text-zinc-300 hover:text-zinc-600 cursor-pointer"
          onClick={() => {
            setValue("");
            inputRef.current?.focus();
          }}
        />
      </Show>

      <button className="px-4 text-zinc-400 hover:text-zinc-700 duration-150 ">
        <Search />
      </button>
    </div>
  );
};

export default Input;
