import { ProductType } from "@/lib/types/contract";

export function filterItems(
  items: ProductType[] | undefined,
  min: number,
  max: number,
  colors: string[],
  search: string
) {
  if (!items) {
    return [];
  }
  let newItems = items;
  if (colors.length !== 0) {
    newItems = newItems.filter((elem) => {
      for (let i = 0; i < elem.colors.length; i++) {
        if (colors.includes(elem.colors[i])) {
          console.log(elem.colors[i]);
          return true;
        }
      }
      return false;
    });
  }

  newItems = newItems.filter((elem) => elem.price >= min && elem.price <= max);
  if (search !== "") {
    newItems = newItems.filter((elem) => {
      const thisItem = (
        elem.title +
        elem.description +
        elem.brand +
        elem.colors.join("")
      ).toLowerCase();
      search = search.toLowerCase();
      if (thisItem.includes(search)) {
        return true;
      }
      console.log(thisItem, search);
      return false;
    });
  }

  return newItems;
}
