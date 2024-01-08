import { LucideIcon } from "lucide-react";

import Show from "@/components/Common/Show";

type IconPropsType = {
  Icon: LucideIcon;
  count?: number;
  stroke?: number;
  text?: string;
};

const Icons = (props: IconPropsType) => {
  return (
    <div className="flex gap-1 items-center h-6 relative cursor-pointer text-zinc-600 hover:text-zinc-900 duration-200">
      <Show when={props.count !== 0}>
        <span className=" text-white text-[10px] bg-red-500 absolute w-3 h-3 rounded-full flex justify-center items-center -top-1 -left-1 select-none cursor-pointer">
          {props.count}
        </span>
      </Show>
      <props.Icon strokeWidth={props.stroke} />
      {props.text && <span className=" text-sm">{props.text}</span>}
    </div>
  );
};

export default Icons;
