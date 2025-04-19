import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routers } from "./routers/Routers.jsx";
import CartContextProvider from "./useContexts/CartContextProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster></Toaster>
    </CartContextProvider>
  </StrictMode>
);
