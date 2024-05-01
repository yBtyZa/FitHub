import styles from "../../pages/pagesCSS/CadastroLocais.module.css";
import CFormCadastroLocais from "../organisms/CFormCadastroLocais";
function CTemplateCadastroLocais() {
 return (
  <div className={styles.container}>
   <h1 style={{ fontWeight: "inherit" }}>
    Cadastre novos locais de exercícios
   </h1>
   <div className={styles.formCadastro}>
    <CFormCadastroLocais />
   </div>
  </div>
 );
}

export default CTemplateCadastroLocais;
