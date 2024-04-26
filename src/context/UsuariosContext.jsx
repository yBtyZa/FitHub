import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const UsuariosContext = createContext();
let url = "http://localhost:3000/usuarios";

export const UsuariosContextProvider = ({ children }) => {
 const { data, loading, isVisible } = useFetch(url);

 const [usuarios, setUsuarios] = useState([]);
 const [senhaError, setSenhaError] = useState(null);
 const [cpfError, setCpfError] = useState(null);

 useEffect(() => {
  if (!loading && data) {
   setUsuarios(data);
  }
 }, [data, loading]);

 function onSubmitForm(form) {
  if (form.senha !== form.confirmar_senha) {
   setSenhaError("As senhas precisam ser iguais");
   return;
  }

  if (usuarios.find((user) => user.cpf === form.cpf)) {
   setCpfError("CPF já cadastrado");
   return;
  }

  setCpfError(null);
  setSenhaError(null);
  gotoLogin();
  cadastrarUsuarioDb(form);
 }

 function cadastrarUsuarioDb(form) {
  fetch(url, {
   method: "POST",
   body: JSON.stringify(form),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => alert("Usuário cadastrado com sucesso!"))
   .catch(() => alert("Erro ao cadastrar usuário!"));
 }

 const navigate = useNavigate();
 function gotoLogin() {
  navigate("/");
 }

 const options = [
  {
   label: "Masculino",
   value: "Masculino"
  },
  {
   label: "Feminino",
   value: "Feminino"
  },
  {
   label: "Outro",
   value: "Outro"
  }
 ];

 return (
  <UsuariosContext.Provider
   value={{
    usuarios,
    loading,
    isVisible,
    setUsuarios,
    onSubmitForm,
    gotoLogin,
    senhaError,
    cpfError,
    options
   }}>
   {children}
  </UsuariosContext.Provider>
 );
};
