import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { set } from "react-hook-form";

export const ExerciciosContext = createContext();

export const ExerciciosContextProvider = ({ children }) => {
 const url = "http://localhost:3000/exercicios";
 const { data, loading, isVisible } = useFetch(url);
 const [exercicios, setExercicios] = useState([]);
 const [usuariosOnline, setUsuariosOnline] = useState(0);
 const [usuarioLogado, setUsuarioLogado] = useState({});
 const [locaisUsuario, setLocaisUsuario] = useState([]);
 const usuarioId = JSON.parse(localStorage.getItem("userId"));

 async function lerDadosDb() {
  try {
   let res = await fetch("http://localhost:3000/usuarios");
   let data = await res.json();
   const usuario = data.find((user) => user.id === usuarioId);
   setUsuarioLogado(usuario);
  } catch (err) {
   console.log(err);
  }
 }

 useEffect(() => {
  if (!loading && data) {
   setExercicios(data);
   const locaisUsuarioAtualizados = data.filter(
    (exercicio) => exercicio.id_usuario === usuarioId
   );
   setLocaisUsuario(locaisUsuarioAtualizados);
   fetch("http://localhost:3000/usuarios")
    .then((res) => res.json())
    .then((value) => {
     lerDadosDb();
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

 function cadastrarNovoLocal(formLocal) {
  fetch(url, {
   method: "POST",
   body: JSON.stringify(formLocal),
   headers: {
    "Content-Type": "application/json"
   }
  }).then(() => {
   window.location.href = "/";
   alert("Local cadastrado com sucesso!");
  });
 }

 return (
  <ExerciciosContext.Provider
   value={{
    exercicios,
    isVisible,
    usuariosOnline,
    usuarioLogado,
    cadastrarNovoLocal,
    locaisUsuario
   }}>
   {children}
  </ExerciciosContext.Provider>
 );
};
