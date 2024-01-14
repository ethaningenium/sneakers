import { CartType } from "./types";

export function getLS() {
  const cart = localStorage.getItem("CartItems");
  if (cart) {
    try {
      const parsedCart: CartType[] = JSON.parse(cart);
      return parsedCart;
    } catch (error) {
      return [];
    }
  }
  return [];
}

export function setLS(cartItems: CartType[]) {
  localStorage.setItem("CartItems", JSON.stringify(cartItems));
}

export function clearLS() {
  localStorage.removeItem("CartItems");
}
