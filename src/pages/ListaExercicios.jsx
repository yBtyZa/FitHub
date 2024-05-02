import styles from "./pagesCSS/ListaExercicios.module.css";
import { Card, MenuItem } from "@mui/material";
import Map from "../components/atoms/Map";
import CTextField from "../components/atoms/CTextField";
import CButton from "../components/atoms/CButton";
import { useContext, useState } from "react";
import { ExerciciosContext } from "../context/ExercicioContext";
import { CepContext } from "../context/CepContext";
import { useForm } from "react-hook-form";

function ListaExercicios() {
 const { register, handleSubmit, setValue, getValues } = useForm();
 const { buscarCep } = useContext(CepContext);

 const { locaisUsuario } = useContext(ExerciciosContext);
 const tipos = [
  "Caminhada",
  "Trilha",
  "Natação",
  "Musculação",
  "Surf",
  "Outro"
 ];

 const [disabledFields, setDisabledFields] = useState({});

 const toggleDisabled = (index) => {
  setDisabledFields({
   ...disabledFields,
   [index]: !disabledFields[index]
  });
  if (!disabledFields[index]) {
   console.log(disabledFields[index]);
  }
 };
 return (
  <div className={styles.container}>
   <h1>Meus Locais</h1>

   <div className={styles.cards}>
    {locaisUsuario.map((local, index) => (
     <Card key={index} sx={{ width: 1000, display: "flex", gap: "1rem" }}>
      <div>
       <Map style={{ width: "400px", height: "400px" }}></Map>
      </div>
      <form
       className={styles.description}
       onSubmit={handleSubmit((formLocal) => {
        console.log("teste");
       })(index)}>
       <div className={styles.divTextFilds}>
        <CTextField
         label="Nome do Local"
         variant="standard"
         fullWidth
         type="text"
         disabled={!disabledFields[index]}
         defaultValue={local.nome}
         {...register("nome", {
          required: true
         })}
        />
        <CTextField
         label="CEP"
         variant="standard"
         type="number"
         fullWidth
         defaultValue={local.cep}
         disabled={!disabledFields[index]}
         {...register("cep" + index, {
          required: true,
          onBlur: () => buscarCep(getValues, setValue, index)
         })}
        />
       </div>
       <div className={styles.divTextFilds}>
        <CTextField
         label="Endereço"
         variant="standard"
         fullWidth
         type="text"
         disabled
         defaultValue={local.endereco}
         {...register("endereco" + index, {
          required: true
         })}
        />
        <CTextField
         label="Cidade"
         variant="standard"
         fullWidth
         type="text"
         disabled
         defaultValue={local.cidade}
         {...register("cidade" + index, {
          required: true
         })}
        />
        <CTextField
         label="Estado"
         variant="standard"
         type="text"
         disabled
         defaultValue={local.estado}
         {...register("estado" + index, {
          required: true
         })}
        />
       </div>
       <div className={styles.divTextFilds}>
        <CTextField
         label="Numero"
         variant="standard"
         fullWidth
         type="number"
         disabled={!disabledFields[index]}
         defaultValue={local.numero}
        />
        <CTextField
         label="Latitude"
         variant="standard"
         fullWidth
         type="text"
         disabled={!disabledFields[index]}
         defaultValue={local.latitude}
        />
        <CTextField
         label="longitude"
         variant="standard"
         fullWidth
         type="text"
         disabled={!disabledFields[index]}
         defaultValue={local.longitude}
        />
        <CTextField
         label="Tipo"
         variant="standard"
         fullWidth
         select
         disabled={!disabledFields[index]}
         defaultValue={local.tipo}>
         {tipos.map((tipo, index) => (
          <MenuItem key={index} value={tipo}>
           {tipo}
          </MenuItem>
         ))}
        </CTextField>
       </div>
       <CTextField
        label="Descrição"
        variant="standard"
        fullWidth
        type="text"
        disabled={!disabledFields[index]}
        multiline
        defaultValue={local.descricao}
       />
       <div className={styles.buttons}>
        <CButton
         type="submit"
         onClick={() => toggleDisabled(index)}
         variant="contained"
         sx={
          !disabledFields[index]
           ? {
              backgroundColor: "#01161e",
              color: "#eff6e0",
              "&:hover": { backgroundColor: "#124559", color: "#eff6e0" }
             }
           : {
              backgroundColor: "#008000",
              color: "#eff6e0",
              "&:hover": { backgroundColor: "#0a5c0a", color: "#eff6e0" }
             }
         }>
         {!disabledFields[index] ? "Editar" : "Salvar"}
        </CButton>
        <CButton
         variant="outlined"
         sx={{
          color: "red",
          borderColor: "red",
          "&:hover": {
           borderColor: "#01161e",
           color: "#eff6e0",
           backgroundColor: "#780000"
          }
         }}>
         Excluir
        </CButton>
       </div>
      </form>
     </Card>
    ))}
   </div>
  </div>
 );
}

export default ListaExercicios;
