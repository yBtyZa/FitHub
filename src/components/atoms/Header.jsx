import logo from "../../assets/FitHubLogo.png";
import { Link } from "react-router-dom";
import CButton from "./CButton";
import styles from "./Header.module.css";

function Header() {
 return (
  <div className={styles.navContainer}>
   <nav className={styles.nav}>
    <div className={styles.logo}>
     <img src={logo} alt="logo" />
     <h1>FitHub!</h1>
    </div>
    <div className={styles.links}>
     <Link to="/login">Exercicios</Link>
     <Link to="/cadastro">Cadastrar Exercicios</Link>
     <Link to="/dashboard">Perfil</Link>
     <CButton
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
