import { CartType } from "@/lib/types/contract";

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
  let likedItems = getLikedItemsFromLocalStorage();
  likedItems = likedItems.filter((elem) => elem !== likedItem);
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

export const setCartToLocalStorage = (cartItems: CartType[]) => {
  localStorage.setItem("CartItems", JSON.stringify(cartItems));
};

export const clearCartItemsFromLocalStorage = () => {
  localStorage.removeItem("CartItems");
};
