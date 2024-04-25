import "./App.css";
import { Outlet } from "react-router-dom";
import { UsuariosContextProvider } from "./context/UsuariosContext";
import { CepContextProvider } from "./context/CepContext";

function App() {
 return (
  <UsuariosContextProvider>
   <CepContextProvider>
    <Outlet />
   </CepContextProvider>
  </UsuariosContextProvider>
 );
}

export default App;
