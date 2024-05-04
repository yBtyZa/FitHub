import styles from "./pagesCSS/Perfil.module.css";
import CTextField from "../components/atoms/CTextField";
import CButton from "../components/atoms/CButton";
import { useContext, useState } from "react";
import { ExerciciosContext } from "../context/ExercicioContext";
import { UsuariosContext } from "../context/UsuariosContext";
import { CepContext } from "../context/CepContext";
import { useForm } from "react-hook-form";
import { MenuItem } from "@mui/material";

function Perfil() {
 const { usuarioLogado } = useContext(ExerciciosContext);
 const { options, atualizarPerfil } = useContext(UsuariosContext);
 const { buscarCep } = useContext(CepContext);
 const [isDisabled, setIsDisabled] = useState(true);
 const { register, handleSubmit, reset, getValues, setValue } = useForm();

 return (
  <div className={styles.container}>
   <div className={styles.title}>
    <h1 style={{ fontWeight: "inherit" }}>Perfil</h1>
   </div>
   <form
    onSubmit={handleSubmit((form) => atualizarPerfil(form))}
    className={styles.perfil}>
    {Object.keys(usuarioLogado).length > 0 && (
     <div className={styles.divPerfil}>
      <div className={styles.inputs}>
       <CTextField
        label="Nome"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        defaultValue={usuarioLogado.nome}
        type="text"
        {...register("nome", {
         required: "Nome obrigatório",
         maxLength: {
          value: 50,
          message: "O nome deve ter no máximo 50 caracteres"
         },
         minLength: {
          value: 3,
          message: "Nome deve ter no mínimo 3 caracteres"
         }
        })}></CTextField>
       <CTextField
        label="Email"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        defaultValue={usuarioLogado.email}
        type="email"
        {...register("email", {
         required: "Email obrigatório",
         maxLength: {
          value: 50,
          message: "O email deve ter no máximo 50 caracteres"
         },
         minLength: {
          value: 3,
          message: "Email deve ter no mínimo 3 caracteres"
         }
        })}></CTextField>
      </div>
      <div className={styles.inputs}>
       <CTextField
        label="CPF"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        defaultValue={usuarioLogado.cpf}
        type="number"
        {...register("cpf", {
         required: "CPF obrigatório",
         maxLength: {
          value: 11,
          message: "O CPF deve ter no máximo 11 digitos"
         },
         minLength: {
          value: 11,
          message: "O CPF deve ter no mínimo 11 digitos"
         }
        })}></CTextField>
       <CTextField
        label="Data de Nascimento"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        type="date"
        defaultValue={usuarioLogado.data_nasc}
        {...register("data_nasc", {
         required: "Data de nascimento obrigatório"
        })}></CTextField>
       <CTextField
        label="Sexo"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        select
        type="text"
        defaultValue={usuarioLogado.sexo}
        {...register("sexo", { required: "Sexo obrigatório" })}>
        {options.map((option) => (
         <MenuItem key={option.value} value={option.value}>
          {option.label}
         </MenuItem>
        ))}
       </CTextField>
      </div>
      <div className={styles.inputs}>
       <CTextField
        label="CEP"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        defaultValue={usuarioLogado.cep}
        type="number"
        {...register("cep", {
         required: "Cep obrigatório",
         minLength: {
          value: 8,
          message: "Cep deve ter no mínimo 8 digitos"
         },
         maxLength: {
          value: 8,
          message: "Cep deve ter no máximo 8 digitos"
         },
         onBlur: () => buscarCep(getValues, setValue)
        })}></CTextField>
       <CTextField
        label="Endereço"
        variant="standard"
        fullWidth
        disabled
        defaultValue={usuarioLogado.endereco}
        type="text"
        {...register("endereco", {
         required: "Endereço obrigatório"
        })}></CTextField>
       <CTextField
        label="Cidade"
        variant="standard"
        fullWidth
        disabled
        defaultValue={usuarioLogado.cidade}
        type="text"
        {...register("cidade", {
         required: "Cidade obrigatório"
        })}></CTextField>
      </div>
      <div className={styles.inputs}>
       <CTextField
        label="Estado"
        variant="standard"
        fullWidth
        disabled
        defaultValue={usuarioLogado.estado}
        type="text"
        {...register("estado", {
         required: "Estado obrigatório"
        })}></CTextField>
       <CTextField
        label="Número"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        defaultValue={usuarioLogado.endereco_numero}
        type="number"
        {...register("endereco_numero", {
         required: "Número obrigatório",
         minLength: {
          value: 1,
          message: "Número deve ter no mínimo 1 digito"
         }
        })}></CTextField>
       <CTextField
        label="Complemento"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        defaultValue={usuarioLogado.complemento}
        type="text"
        {...register("complemento")}></CTextField>
      </div>
      <div className={styles.inputs}>
       <CTextField
        label="Senha"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        defaultValue={usuarioLogado.senha}
        type="password"
        {...register("senha", {
         required: "Senha obrigatório",
         minLength: {
          value: 8,
          message: "Senha deve ter no mínimo 8 digitos"
         },
         maxLength: {
          value: 16,
          message: "Senha deve ter no máximo 16 digitos"
         }
        })}></CTextField>
       <CTextField
        label="Confirmar Senha"
        variant="standard"
        fullWidth
        disabled={isDisabled}
        defaultValue={usuarioLogado.confirmar_senha}
        type="password"
        {...register("confirmar_senha", {
         required: "Confirmar senha obrigatório",
         minLength: {
          value: 8,
          message: "Confirmar senha deve ter no mínimo 8 digitos"
         },
         maxLength: {
          value: 16,
          message: "Confirmar senha deve ter no máximo 16 digitos"
         }
        })}></CTextField>
      </div>
      <div className={styles.buttons}>
       <CButton
        variant="contained"
        type="submit"
        onClick={
         isDisabled
          ? (e) => (
             e.preventDefault(),
             setIsDisabled(!isDisabled),
             reset(usuarioLogado)
            )
          : () => {
             let nome = getValues("nome");
             let email = getValues("email");
             let cpf = getValues("cpf");
             let data_nasc = getValues("data_nasc");
             let sexo = getValues("sexo");
             let cep = getValues("cep");
             let numero = getValues("endereco_numero");
             let senha = getValues("senha");
             let confirmar_senha = getValues("confirmar_senha");
             nome.length < 3 || nome.length > 50
              ? null
              : email.length < 3 || email.length > 50
              ? null
              : cpf.length < 11 || cpf.length > 11
              ? null
              : !data_nasc
              ? null
              : !sexo
              ? null
              : cep.length < 8 || cep.length > 8
              ? null
              : numero === " "
              ? null
              : senha.length < 8 || senha.length > 16
              ? null
              : confirmar_senha.length < 8 || confirmar_senha.length > 16
              ? null
              : setIsDisabled(!isDisabled);
            }
        }
        sx={
         isDisabled
          ? {
             backgroundColor: "#01161e",
             color: "#eff6e0",
             "&:hover": { backgroundColor: "#124559", color: "#eff6e0" }
            }
          : {
             backgroundColor: "#649000",
             color: "#eff6e0",
             "&:hover": { backgroundColor: "#324800", color: "#eff6e0" }
            }
        }>
        {isDisabled ? "Editar" : "Salvar"}
       </CButton>
       <CButton
        variant="outlined"
        onClick={() => console.log("excluir")}
        sx={{
         color: "#990000",
         borderColor: "#990000",
         "&:hover": {
          backgroundColor: "#990000",
          color: "white"
         }
        }}>
        Excluir Perfil
       </CButton>
      </div>
     </div>
    )}
   </form>
  </div>
 );
}

export default Perfil;