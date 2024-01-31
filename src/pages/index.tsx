import { createBrowserRouter } from "react-router-dom";
import App from "@/pages/App";
import ItemPage from "./ItemPage";
import OrderFormPage from "./OrderFormPage";

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
    path: "/createorder",
    element: <OrderFormPage />,
  },
]);
