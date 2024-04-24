import stylesCadastro from "../../pages/pagesCSS/CadastroUsuario.module.css";
import CTextField from "../atoms/CTextField";
import CButton from "../atoms/CButton";
import { MenuItem } from "@mui/material";

import { useNavigate } from "react-router-dom";

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
 const navigate = useNavigate();
 function gotoLogin() {
  navigate("/");
 }
 return (
  <form className={stylesCadastro.formCadastro}>
   <CTextField
    required
    variant="standard"
    label="Nome de usuário"
    type="text"
    fullWidth
   />
   <CTextField
    required
    variant="standard"
    label="E-mail"
    type="email"
    fullWidth
   />
   <div className={stylesCadastro.textFields}>
    <CTextField
     required
     variant="standard"
     label="CPF"
     type="number"
     fullWidth
    />
    <CTextField
     required
     variant="standard"
     label="Data de nascimento"
     type="date"
     defaultValue="2024-01-01"
     fullWidth
    />
   </div>
   <div className={stylesCadastro.textFields}>
    <CTextField
     required
     id="standard-select-currency"
     variant="standard"
     label="Sexo"
     select
     defaultValue=""
     fullWidth>
     {options.map((option, index) => (
      <MenuItem key={index} value={option.value}>
       {option.label}
      </MenuItem>
     ))}
    </CTextField>
    <CTextField
     required
     variant="standard"
     label="CEP"
     type="number"
     fullWidth
    />
   </div>
   <div className={stylesCadastro.textFields}>
    <CTextField
     required
     variant="standard"
     label="Senha"
     type="password"
     fullWidth
    />
    <CTextField
     required
     variant="standard"
     label="Confirmar Senha"
     type="password"
     fullWidth
    />
   </div>
   <CButton
    className={stylesCadastro.button}
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
