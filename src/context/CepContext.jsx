import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const CepContext = createContext();

export const CepContextProvider = ({ children }) => {
 const { data, loading, isVisible } = useFetch(
  "https://viacep.com.br/ws/88047622/json/"
 );

 const [dataCep, setDataCep] = useState({});

 useEffect(() => {
  if (!loading && data) {
   setDataCep(data);
  }
 }, [data, loading]);

 return (
  <CepContext.Provider value={{ dataCep, loading, isVisible, setDataCep }}>
   {children}
  </CepContext.Provider>
 );
};
