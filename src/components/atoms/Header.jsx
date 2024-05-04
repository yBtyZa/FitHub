import logo from "../../assets/FitHubLogo.png";
import { Link } from "react-router-dom";
import CButton from "./CButton";
import styles from "./Header.module.css";
import { useContext } from "react";
import { UsuariosContext } from "../../context/UsuariosContext";

function Header() {
 const { logout } = useContext(UsuariosContext);
 return (
  <div className={styles.navContainer}>
   <nav className={styles.nav}>
    <div className={styles.logo}>
     <img src={logo} alt="logo" />
     <h1 onClick={() => (window.location.href = "/")}>FitHub!</h1>
    </div>
    <div className={styles.links}>
     <Link to="/lista-exercicios">Meus Locais</Link>
     <Link to="/cadastro-exercicios">Cadastrar Locais</Link>
     <Link to="/dashboard">Perfil</Link>
     <CButton
      onClick={() => {
       logout(JSON.parse(localStorage.getItem("userId")));
      }}
      variant="outlined"
      sx={{
       color: "#eff6e0",
       backgroundColor: "#124559",
       "&:hover": { backgroundColor: "#eff6e0", color: "#124559" }
      }}>
      Sair
     </CButton>
    </div>
   </nav>
  </div>
 );
}

export default Header;
