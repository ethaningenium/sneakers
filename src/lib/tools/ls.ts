import { CartType } from "./types/contract";

export const getLikedItemsFromLocalStorage = () => {
  const likedItems = localStorage.getItem("likedItems");
  if (likedItems) {
    try {
      const parsedLikedItems: string[] = JSON.parse(likedItems);
      return parsedLikedItems;
    } catch (error) {
      return [];
    }
  }
  return [];
};

export const setLikedItemsToLocalStorage = (likedItem: string) => {
  const likedItems = getLikedItemsFromLocalStorage();
  likedItems.push(likedItem);
  localStorage.setItem("likedItems", JSON.stringify(likedItems));
};

export const deleteLikedItemFromLocalStorage = (likedItem: string) => {
  const likedItems = getLikedItemsFromLocalStorage();
  likedItems.splice(likedItems.indexOf(likedItem), 1);
  localStorage.setItem("likedItems", JSON.stringify(likedItems));
};

export const getCartFromLocalStorage = () => {
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
};

export const setCartToLocalStorage = (cartItem: CartType) => {
  const cart = getCartFromLocalStorage();
  cart.push(cartItem);
  localStorage.setItem("CartItems", JSON.stringify(cart));
};

export const deleteCartFromLocalStorage = (cartItem: CartType) => {
  const cart = getCartFromLocalStorage();
  cart.splice(cart.indexOf(cartItem), 1);
  localStorage.setItem("CartItems", JSON.stringify(cart));
};
