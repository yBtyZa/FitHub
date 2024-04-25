import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const UsuariosContext = createContext();

export const UsuariosContextProvider = ({ children }) => {
 const { data, loading, isVisible } = useFetch("/usuarios.json");

 const [usuarios, setUsuarios] = useState([]);

 useEffect(() => {
  if (!loading && data) {
   setUsuarios(data);
  }
 }, [data, loading]);

 return (
  <UsuariosContext.Provider
   value={{ usuarios, loading, isVisible, setUsuarios }}>
   {children}
  </UsuariosContext.Provider>
 );
};
