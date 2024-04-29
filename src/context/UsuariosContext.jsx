import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const UsuariosContext = createContext();
let url = "http://localhost:3000/usuarios";
export const UsuariosContextProvider = ({ children }) => {
 const { data, loading, isVisible } = useFetch(url);

 const [usuarios, setUsuarios] = useState([]);
 const [senhaError, setSenhaError] = useState(null);
 const [cpfError, setCpfError] = useState(null);
 const [emailError, setEmailError] = useState(null);
 useEffect(() => {
  if (!loading && data) {
   setUsuarios(data);
  }
 }, [data, loading]);

 async function lerUsuariosDb() {
  try {
   let res = await fetch(url);
   let data = await res.json();
   setUsuarios(data);
  } catch (err) {
   alert(err);
  }
 }

 function onSubmitFormCadastro(formCadastro) {
  if (usuarios.find((user) => user.email === formCadastro.email)) {
   setEmailError("Email já cadastrado");
   setCpfError(null);
   setSenhaError(null);
   return;
  }
  if (usuarios.find((user) => user.cpf === formCadastro.cpf)) {
   setCpfError("CPF já cadastrado");
   setSenhaError(null);
   setEmailError(null);
   return;
  }
  if (formCadastro.senha !== formCadastro.confirmar_senha) {
   setSenhaError("As senhas precisam ser iguais");
   setCpfError(null);
   setEmailError(null);
   return;
  }

  setCpfError(null);
  setSenhaError(null);
  setEmailError(null);
  cadastrarUsuarioDb(formCadastro);
  gotoLogin();
 }

 function cadastrarUsuarioDb(formCadastro) {
  fetch(url, {
   method: "POST",
   body: JSON.stringify(formCadastro),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    lerUsuariosDb();
    alert("Usuário cadastrado com sucesso!");
   })
   .catch(() => alert("Erro ao cadastrar usuário!"));
 }

 async function onSubmitFormLogin(formLogin) {
  try {
   let userLogged = false;
   let usuarioEncontrado = usuarios.find(
    (user) => user.email == formLogin.email
   );

   if (usuarioEncontrado) {
    if (usuarioEncontrado.senha === formLogin.senha) {
     setSenhaError(null);
     setEmailError(null);
     userLogged = true;
     localStorage.setItem("userLogged", userLogged);
     localStorage.setItem("userNome", JSON.stringify(usuarioEncontrado.nome));
     window.location.href = "/";
    } else {
     setSenhaError("Senha inválida");
     setEmailError(null);
    }
   } else {
    setEmailError("Email inválido");
    setSenhaError(null);
   }
  } catch (err) {
   console.log(err);
  }
 }

 function gotoLogin() {
  window.location.href = "/login";
 }

 function gotoRegister() {
  window.location.href = "/cadastro-usuario";
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
    onSubmitFormCadastro,
    onSubmitFormLogin,
    gotoLogin,
    gotoRegister,
    senhaError,
    cpfError,
    emailError,
    options
   }}>
   {children}
  </UsuariosContext.Provider>
 );
};
