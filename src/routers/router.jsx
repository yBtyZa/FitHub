import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import CadastroUsuario from "../pages/CadastroUsuario";
import Dashboard from "../pages/Dashboard";
import ListaExercicios from "../pages/ListaExercicios";
import CadastroExercicios from "../pages/CadastroExercicios";

export const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  children: [
   {
    path: "/",
    element: <Login />
   },
   {
    path: "/cadastro-usuario",
    element: <CadastroUsuario />
   },
   {
    path: "/dashboard",
    element: <Dashboard />
   },
   {
    path: "/lista-exercicios",
    element: <ListaExercicios />
   },
   {
    path: "/cadastro-exercicios",
    element: <CadastroExercicios />
   }
  ]
 }
]);
