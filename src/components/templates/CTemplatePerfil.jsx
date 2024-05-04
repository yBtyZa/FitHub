import styles from "../../pages/pagesCSS/Perfil.module.css";
import CFormPerfil from "../organisms/CFormPerfil";

function CTemplatePerfil() {
 return (
  <div className={styles.container}>
   <div className={styles.title}>
    <h1 style={{ fontWeight: "inherit" }}>Perfil</h1>
   </div>
   <CFormPerfil />
  </div>
 );
}

export default CTemplatePerfil;
