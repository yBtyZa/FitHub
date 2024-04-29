import styles from "./pagesCSS/Dashboard.module.css";
import logo from "../assets/FitHubLogo.png";
import { Link } from "react-router-dom";
import CButton from "../components/atoms/CButton";
import Map from "../components/atoms/Map";
import { Card } from "@mui/material";
import { useContext } from "react";
import { ExerciciosContext } from "../context/ExerciciosContext";

function Dashboard() {
 const nomeUsuario = JSON.parse(localStorage.getItem("userNome"));

 const { exercicios } = useContext(ExerciciosContext);

 return (
  <div className={styles.container}>
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

   <div className={styles.content}>
    <div className={styles.welcome}>
     <h1 style={{ fontWeight: "inherit" }}>Olá {nomeUsuario}!</h1>
     <h2 style={{ fontWeight: "inherit" }}>
      Seja bem-vindo(a) ao <span style={{ fontWeight: "bold" }}>FitHub!</span>
     </h2>
     <h4 style={{ fontWeight: "inherit" }}>
      O seu portal completo para gerenciar seus exercícios e encontrar os
      melhores locais para atividades físicas.
     </h4>
    </div>

    <div className={styles.leafletContainer}>
     <Map
      style={{
       width: "600px",
       height: "385px",
       boxShadow: "1px 1px 10px black"
      }}></Map>
     <div className={styles.description}>
      <h2 style={{ fontWeight: "inherit" }}>
       Descubra uma nova maneira de se exercitar e se manter saudável!{" "}
      </h2>
      <h4 style={{ fontWeight: "inherit" }}>
       Sua solução completa para organizar seus treinos e descobrir os melhores
       espaços para se exercitar.
      </h4>
     </div>
    </div>
    <div className={styles.div_cards}>
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
   </div>
  </div>
 );
}

export default Dashboard;
