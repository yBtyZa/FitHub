import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./Footer.module.css";

function Footer() {
 return (
  <div className={styles.footer}>
   <p>Copyright © 2024 - FitHub. Todos os direitos reservados.</p>
   <div className={styles.icons}>
    <a href="">
     <LinkedInIcon sx={{ color: "#124559" }} />
    </a>
    <a href="">
     <GitHubIcon sx={{ color: "#124559" }} />
    </a>
    <a href="">
     <InstagramIcon sx={{ color: "#124559" }} />
    </a>
   </div>
  </div>
 );
}

export default Footer;
