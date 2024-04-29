import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const ExerciciosContext = createContext();

export const ExerciciosContextProvider = ({ children }) => {
 const url = "http://localhost:3000/exercicios";
 const { data, loading, isVisible } = useFetch(url);
 const [exercicios, setExercicios] = useState([]);
 const [usuariosOnline, setUsuariosOnline] = useState(0);

 useEffect(() => {
  if (!loading && data) {
   setExercicios(data);
   fetch("http://localhost:3000/usuarios")
    .then((res) => res.json())
    .then((value) => {
     const usuariosOnlineCount = value.reduce((acc, user) => {
      if (user.online) {
       return acc + 1;
      }
      return acc;
     }, 0);
     setUsuariosOnline(usuariosOnlineCount);
    })
    .catch((error) => {
     console.error(error);
    });
  }
 }, [data, loading]);

 return (
  <ExerciciosContext.Provider value={{ exercicios, isVisible, usuariosOnline }}>
   {children}
  </ExerciciosContext.Provider>
 );
};
