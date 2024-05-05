import "./App.css";
import { Outlet } from "react-router-dom";
import { ExerciciosContextProvider } from "./context/ExercicioContext";
import Header from "./components/atoms/Header";
import Footer from "./components/atoms/Footer";

function App() {
 return (
  <ExerciciosContextProvider>
   <Header />
   <Outlet />
   <Footer />
  </ExerciciosContextProvider>
 );
}

export default App;
