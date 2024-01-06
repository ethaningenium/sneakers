import { createBrowserRouter } from "react-router-dom";
import App from "@/pages/App";
import ItemPage from "./ItemPage";
import Cart from "./Cart";

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
    element: <Cart />,
  },
]);
