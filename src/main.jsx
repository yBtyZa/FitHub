import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";
import { UsuariosContextProvider } from "./context/UsuariosContext";
import { CepContextProvider } from "./context/CepContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 <CepContextProvider>
  <UsuariosContextProvider>
   <RouterProvider router={router} />
  </UsuariosContextProvider>
 </CepContextProvider>
);
