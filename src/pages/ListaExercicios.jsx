import LocalForm from "./LocalForm";
import { useContext } from "react";
import { ExerciciosContext } from "../context/ExercicioContext";
import styles from "./pagesCSS/ListaExercicios.module.css";

function ListaExercicios() {
 const { locaisUsuario, atualizarLocais } = useContext(ExerciciosContext);

 const atualizarLocal = (data) => {
  atualizarLocais(data);
 };

 return (
  <div className={styles.container}>
   <h1 style={{ fontWeight: "inherit" }} className={styles.title}>
    Meus Locais
   </h1>
   {locaisUsuario.map((local, index) => (
    <div key={local.id} className={styles.cardContainer}>
     <LocalForm local={local} onSubmit={atualizarLocal} />
    </div>
   ))}
  </div>
 );
}

export default ListaExercicios;
