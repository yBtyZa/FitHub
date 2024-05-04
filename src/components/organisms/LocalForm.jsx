import styles from "../../pages/pagesCSS/ListaExercicios.module.css";
import Map from "../atoms/Map";
import CFormLocal from "../molecules/CFormLocal";

function LocalForm({ local, onSubmit }) {
 return (
  <div className={styles.card}>
   <Map
    zoom={14}
    markers={[local]}
    position={[Number(local.latitude), Number(local.longitude)]}
    style={{ width: "400px", minHeight: "400px" }}></Map>
   <CFormLocal local={local} onSubmit={onSubmit} />
  </div>
 );
}

export default LocalForm;
