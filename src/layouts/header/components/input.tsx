import { Search, X } from "lucide-react";
import { useRef, useState } from "react";

import Show from "@/components/Common/Show";
import { useLocation, useNavigate } from "react-router-dom";

export const Input = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  function updateSearchParams() {
    queryParams.set("search", value);
    const newParams = queryParams.toString();
    const newUrl = `${location.pathname}?${newParams}`;
    navigate(newUrl);
  }
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

      <button
        onClick={updateSearchParams}
        className="px-4 text-zinc-400 hover:text-zinc-700 duration-150 "
      >
        <Search />
      </button>
    </div>
  );
};
