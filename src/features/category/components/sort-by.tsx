import { ChevronDown } from "lucide-react";

export const SortBy = () => {
  return (
    <div className="flex gap-4 items-center">
      <span>Сортировать</span>
      <span>По цене</span>
      <ChevronDown />
    </div>
  );
};
