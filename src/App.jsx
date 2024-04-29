import "./App.css";

import { Outlet } from "react-router-dom";
import { ExerciciosContextProvider } from "./context/ExerciciosContext";

function App() {
 return (
  <ExerciciosContextProvider>
   <Outlet />
  </ExerciciosContextProvider>
 );
}

export default App;
