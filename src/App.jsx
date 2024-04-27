import "./App.css";
import { Outlet } from "react-router-dom";
import { UsuariosContextProvider } from "./context/UsuariosContext";
import { CepContextProvider } from "./context/CepContext";

function App() {
 return (
  <CepContextProvider>
   <UsuariosContextProvider>
    <Outlet />
   </UsuariosContextProvider>
  </CepContextProvider>
 );
}

export default App;
