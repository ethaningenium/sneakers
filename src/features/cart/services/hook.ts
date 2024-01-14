import useCart from "./store";
import { CartType } from "./types";
import { getLS, setLS, clearLS } from "./local";

export const useCartChange = () => {
  const { cartitems, clearCart, setItems } = useCart();

  function add(item: CartType) {
    const newItems = [...cartitems];
    let isfind = false;
    for (let i = 0; i < newItems.length; i++) {
      if (
        newItems[i].id === item.id &&
        newItems[i].color == item.color &&
        newItems[i].size == item.size
      ) {
        newItems[i].count++;
        isfind = true;
        break;
      }
    }
    if (isfind) {
      setItems([...newItems]);
      setLS(newItems);
    } else {
      setItems([...cartitems, item]);
      setLS([...cartitems, item]);
    }
  }

  function initialLoad() {
    const items = getLS();
    setItems(items);
    setLS(items);
  }

  function clear() {
    clearCart();
    clearLS();
  }

  function set(items: CartType[]) {
    setItems(items);
    setLS(items);
  }

  function inc(item: CartType) {
    const newItems = [...cartitems];
    for (let i = 0; i < newItems.length; i++) {
      if (
        newItems[i].id === item.id &&
        newItems[i].color === item.color &&
        newItems[i].size === item.size
      ) {
        newItems[i].count++;
        break;
      }
    }
    setItems(newItems);
    setLS(newItems);
  }

  function dec(item: CartType) {
    const newItems = [...cartitems];
    for (let i = 0; i < newItems.length; i++) {
      if (
        newItems[i].id === item.id &&
        newItems[i].color === item.color &&
        newItems[i].size === item.size
      ) {
        newItems[i].count--;
        break;
      }
    }
    setItems(newItems);
    setLS(newItems);
  }
  function remove(item: CartType) {
    const newItems = cartitems.filter((elem) => {
      if (
        elem.id === item.id &&
        elem.color === item.color &&
        elem.size === item.size
      ) {
        return false;
      } else {
        return true;
      }
    });
    setItems(newItems);
    setLS(newItems);
  }

  return {
    cartitems,
    initialLoad,
    inc,
    dec,
    remove,
    set,
    clear,
    add,
  };
};
