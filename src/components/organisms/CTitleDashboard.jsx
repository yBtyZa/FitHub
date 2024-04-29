import { Card } from "@mui/material";
import styles from "../../pages/pagesCSS/Dashboard.module.css";
import { useContext } from "react";
import { ExerciciosContext } from "../../context/ExercicioContext";

function CTitleDashboard() {
 const { exercicios, usuariosOnline } = useContext(ExerciciosContext);
 return (
  <div className={styles.title_info}>
   <Card
    sx={{
     backgroundColor: "#124559",
     color: "#eff6e0",
     margin: "1rem",
     padding: "0.5rem",
     display: "flex",
     justifyContent: "center",
     alignItems: "center"
    }}>
    <p>
     Usuarios online: <span className={styles.count}>{usuariosOnline}</span>
    </p>
   </Card>
   <Card
    sx={{
     backgroundColor: "#124559",
     color: "#eff6e0",
     margin: "1rem",
     padding: "0.5rem",
     display: "flex",
     justifyContent: "center",
     alignItems: "center"
    }}>
    <p>
     Exercicios cadastrados:{" "}
     <span className={styles.count}>{exercicios.length}</span>
    </p>
   </Card>
  </div>
 );
}

export default CTitleDashboard;
