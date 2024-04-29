import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const ExerciciosContext = createContext();

export const ExerciciosContextProvider = ({ children }) => {
 const url = "http://localhost:3000/exercicios";
 const { data, loading, isVisible } = useFetch(url);
 const [exercicios, setExercicios] = useState([]);

 useEffect(() => {
  if (!loading && data) {
   debugger;
   setExercicios(data);
  }
 }, [data, loading]);

 return (
  <ExerciciosContext.Provider value={{ exercicios, isVisible }}>
   {children}
  </ExerciciosContext.Provider>
 );
};
