import CTextField from "../atoms/CTextField";
import CButton from "../atoms/CButton";
import styles from "../../pages/pagesCSS/Login.module.css";
import { Link } from "react-router-dom";

function CFormLogin() {
 return (
  <form className={styles.form}>
   <CTextField label="Email" variant="standard" type="email" />
   <CTextField label="Senha" variant="standard" type="password" />
   <Link to={"/"}>Esqueceu a senha?</Link>
   <CButton
    variant="contained"
    sx={{
     backgroundColor: "#01161e",
     color: "#eff6e0",
     "&:hover": { backgroundColor: "#124559", color: "#eff6e0" }
    }}>
    Entrar
   </CButton>
   <Link to={"/cadastro-usuario"} className={styles.link}>
    <CButton
     variant="outlined"
     sx={{
      color: "#01161e",
      borderColor: "#01161e",
      "&:hover": { borderColor: "#AEC3B0" }
     }}>
     Cadastre-se
    </CButton>
   </Link>
  </form>
 );
}

export default CFormLogin;
