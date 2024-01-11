import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CartType } from "../types/contract";
import { setCartToLocalStorage } from "../tools/ls";

interface BearState {
  cartitems: CartType[];
  setItemToCart: (item: CartType) => void;
  setInitialCartItems: (items: CartType[]) => void;
  deleteItemFromCart: (item: CartType) => void;
  cartItemInc: (id: string, color: string, size: number) => void;
  cartItemDec: (id: string, color: string, size: number) => void;
}

const useCart = create<BearState>()(
  devtools((set) => ({
    cartitems: [],
    setItemToCart: (item) => {
      set((state) => {
        const cartItems = state.cartitems;
        let isFind = false;
        for (let i = 0; i < cartItems.length; i++) {
          if (
            cartItems[i].id === item.id &&
            cartItems[i].color == item.color &&
            cartItems[i].size == item.size
          ) {
            cartItems[i].count++;
            isFind = true;
            break;
          }
        }
        if (!isFind) {
          cartItems.push(item);
        }
        setCartToLocalStorage(cartItems);
        return { cartitems: cartItems };
      });
    },
    setInitialCartItems: (items) => {
      set(() => ({ cartitems: items }));
    },
    deleteItemFromCart: (item) => {
      set((state) => {
        const cartItems = state.cartitems.filter((elem) => {
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
        setCartToLocalStorage(cartItems);
        return {
          cartitems: cartItems,
        };
      });
    },
    cartItemInc: (id, color, size) => {
      set((state) => {
        const cartItems = state.cartitems;
        for (let i = 0; i < cartItems.length; i++) {
          if (
            cartItems[i].id === id &&
            cartItems[i].color == color &&
            cartItems[i].size == size
          ) {
            cartItems[i].count++;
            break;
          }
        }

        setCartToLocalStorage(cartItems);
        return { cartitems: cartItems };
      });
    },
    cartItemDec: (id, color, size) => {
      set((state) => {
        const cartItems = state.cartitems;
        for (let i = 0; i < cartItems.length; i++) {
          if (
            cartItems[i].id === id &&
            cartItems[i].color == color &&
            cartItems[i].size == size
          ) {
            cartItems[i].count--;
            break;
          }
        }

        setCartToLocalStorage(cartItems);
        return { cartitems: cartItems };
      });
    },
  }))
);

export default useCart;
