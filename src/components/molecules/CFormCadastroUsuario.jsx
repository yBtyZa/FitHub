import stylesCadastro from "../../pages/pagesCSS/CadastroUsuario.module.css";
import CTextField from "../atoms/CTextField";
import CButton from "../atoms/CButton";
import { MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UsuariosContext } from "../../context/UsuariosContext";

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

function CFormCadastroUsuario() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 const navigate = useNavigate();
 function gotoLogin() {
  navigate("/");
 }
 const { usuarios, setUsuarios } = useContext(UsuariosContext);
 const [senhaError, setSenhaError] = useState(null);
 const [cpfError, setCpfError] = useState(null);
 function onSubmitForm(form) {
  if (form.senha !== form.confirmar_senha) {
   setSenhaError("Senhas diferentes");
   return;
  }

  if (usuarios.find((user) => user.cpf === form.cpf)) {
   setCpfError("CPF já cadastrado");
   return;
  }

  setCpfError(null);
  setSenhaError("Senha obrigatória");
  console.log("Novo usuário:", form);
  setUsuarios([...usuarios, form]);
  console.log("Lista de usuários atualizada:", [...usuarios, form]);
  gotoLogin();
 }
 return (
  <form
   className={stylesCadastro.formCadastro}
   onSubmit={handleSubmit(onSubmitForm)}>
   <CTextField
    variant="standard"
    label="Nome de usuário"
    type="text"
    fullWidth
    {...register("nome", {
     required: "Nome de usuário obrigatório",
     maxLength: {
      value: 30,
      message: "Nome de usuário muito grande"
     }
    })}
   />
   <div className={stylesCadastro.error}>
    {errors.nome && <p>{errors.nome.message}</p>}
   </div>
   <CTextField
    variant="standard"
    label="E-mail"
    type="email"
    fullWidth
    {...register("email", {
     required: "E-mail obrigatório",
     maxLength: {
      value: 30,
      message: "E-mail muito grande"
     }
    })}
   />
   <div className={stylesCadastro.error}>
    {errors.email && <p>{errors.email.message}</p>}
   </div>
   <div className={stylesCadastro.textFields}>
    <CTextField
     variant="standard"
     label="CPF"
     type="number"
     fullWidth
     {...register("cpf", {
      required: "CPF obrigatório",
      maxLength: {
       value: 11,
       message: "CPF muito grande"
      },
      minLength: {
       value: 11,
       message: "CPF muito pequeno"
      }
     })}
    />
    <CTextField
     variant="standard"
     label="Data de nascimento"
     type="date"
     defaultValue="2024-01-01"
     fullWidth
     {...register("data_nasc", {
      required: "Data de nascimento obrigatório"
     })}
    />
   </div>
   <div className={stylesCadastro.errorDuplo}>
    {errors.cpf && <p>{errors.cpf.message}</p>}
    {errors.nome && <p>{errors.nome.message}</p>}
    {cpfError === "CPF já cadastrado" && <p>{cpfError}</p>}
   </div>
   <div className={stylesCadastro.textFields}>
    <CTextField
     id="standard-select-currency"
     variant="standard"
     label="Sexo"
     select
     defaultValue=""
     fullWidth
     {...register("sexo", { required: "Sexo obrigatório" })}>
     {options.map((option, index) => (
      <MenuItem key={index} value={option.value}>
       {option.label}
      </MenuItem>
     ))}
    </CTextField>
    <CTextField
     variant="standard"
     label="CEP"
     type="number"
     fullWidth
     {...register("cep", {
      required: "CEP obrigatório",
      maxLength: {
       value: 8,
       message: "CEP muito grande"
      },
      minLength: {
       value: 8,
       message: "CEP muito pequeno"
      }
     })}
    />
   </div>
   <div className={stylesCadastro.errorDuplo}>
    {errors.sexo && <p>{errors.sexo.message}</p>}
    {errors.cep && <p>{errors.cep.message}</p>}
   </div>
   <div className={stylesCadastro.textFields}>
    <CTextField
     variant="standard"
     label="Senha"
     type="password"
     fullWidth
     {...register("senha", {
      required: "Senha obrigatória",
      maxLength: {
       value: 16,
       message: "Senha muito grande (max 16 caracteres)"
      },
      minLength: {
       value: 8,
       message: "Senha muito pequena (min 8 caracteres)"
      }
     })}
    />
    <CTextField
     variant="standard"
     label="Confirmar Senha"
     type="password"
     fullWidth
     {...register("confirmar_senha", {
      required: "Senha obrigatória",
      maxLength: {
       value: 16,
       message: "Confirmar senha muito grande (max 16 caracteres)"
      },
      minLength: {
       value: 8,
       message: "Confirmar senha muito pequena (min 8 caracteres)"
      }
     })}
    />
   </div>
   <div className={stylesCadastro.errorDuplo}>
    {errors.senha && <p>{errors.senha.message}</p>}
    {errors.confirmar_senha && <p>{errors.confirmar_senha.message}</p>}
    {senhaError === "Senhas diferentes" && <p>{senhaError}</p>}
   </div>
   <CButton
    className={stylesCadastro.button}
    type="submit"
    sx={{
     backgroundColor: "#01161e",
     color: "#eff6e0",
     "&:hover": { backgroundColor: "#124559", color: "#eff6e0" }
    }}>
    Cadastrar
   </CButton>
   <CButton
    onClick={gotoLogin}
    variant="outlined"
    sx={{
     color: "#01161e",
     borderColor: "#01161e",
     "&:hover": { borderColor: "#AEC3B0" }
    }}>
    Já possui conta?
   </CButton>
  </form>
 );
}

export default CFormCadastroUsuario;
