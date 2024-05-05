import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import CadastroUsuario from "../pages/CadastroUsuario";
import Dashboard from "../pages/Dashboard";
import ListaExercicios from "../pages/ListaExercicios";
import CadastroExercicios from "../pages/CadastroExercicios";
import Perfil from "../pages/Perfil";

let userLogged = JSON.parse(localStorage.getItem("userLogged")) || false;

export const PriviteRoute = ({ children }) => {
 return userLogged ? children : <Navigate to="/login" />;
};

export const router = createBrowserRouter([
 {
  path: "/login",
  element: <Login />
 },
 {
  path: "/cadastro-usuario",
  element: <CadastroUsuario />
 },
 {
  path: "/",
  element: (
   <PriviteRoute>
    <App />
   </PriviteRoute>
  ),
  children: [
   {
    path: "/",
    element: <Dashboard />
   },
   {
    path: "/lista-exercicios",
    element: <ListaExercicios />
   },
   {
    path: "/cadastro-exercicios",
    element: <CadastroExercicios />
   },
   {
    path: "/perfil",
    element: <Perfil />
   }
  ]
 }
]);
