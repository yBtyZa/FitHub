import { Card } from "@mui/material";
import styles from "../../pages/pagesCSS/Dashboard.module.css";
import { useContext } from "react";
import { ExerciciosContext } from "../../context/ExercicioContext";
import Map from "../atoms/Map";

function CCardsDashboard() {
 const { exercicios } = useContext(ExerciciosContext);
 return (
  <div className={styles.cards}>
   {exercicios.map((e, i) => (
    <Card
     className={styles.card}
     key={i}
     sx={{
      width: 345,
      minHeight: 560,
      backgroundColor: "#eff6e0",
      color: "#124559",
      margin: "1rem",
      boxShadow: "1px 1px 20px black"
     }}>
     <Map style={{ width: "345px", height: "210px" }}></Map>
     <div className={styles.card_info}>
      <h4>Nome: {e.nome}</h4>
      <p>Localização: {e.localizacao}</p>
      <p>Tipo: {e.tipo}</p>
      <p>Por: {e.nome_usuario}</p>
      <p>Descricão: {e.descricao}</p>
     </div>
    </Card>
   ))}
  </div>
 );
}

export default CCardsDashboard;
