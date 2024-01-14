import { createBrowserRouter } from "react-router-dom";
import { Catalog } from "@/pages/catalog";
import Sneaker from "./sneaker";
import CartPage from "./cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog />,
  },
  {
    path: "/:id",
    element: <Sneaker />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);
