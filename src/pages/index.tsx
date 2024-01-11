import { createBrowserRouter } from "react-router-dom";
import App from "@/pages/App";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <ItemPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);
