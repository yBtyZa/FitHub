// LocalForm.js
import { useForm } from "react-hook-form";
import { MenuItem } from "@mui/material";
import CTextField from "../components/atoms/CTextField";
import CButton from "../components/atoms/CButton";
import styles from "./pagesCSS/ListaExercicios.module.css";
import Map from "../components/atoms/Map";
import { useContext, useState } from "react";
import { CepContext } from "../context/CepContext";
import { ExerciciosContext } from "../context/ExercicioContext";

function LocalForm({ local, onSubmit }) {
 const {
  register,
  handleSubmit,
  getValues,
  setValue,
  reset,
  formState: { errors }
 } = useForm();
 const { buscarCep } = useContext(CepContext);
 const { deleteLocal } = useContext(ExerciciosContext);
 const [isDisabled, setIsDisabled] = useState(true);

 const tipos = [
  "Caminhada",
  "Trilha",
  "Natação",
  "Musculação",
  "Surf",
  "Outro"
 ];

 return (
  <div className={styles.card}>
   <Map style={{ width: "400px", height: "400px" }}></Map>
   <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
    <div className={styles.inputs}>
     <CTextField
      label="Nome do Local"
      variant="standard"
      fullWidth
      type="text"
      disabled={isDisabled}
      defaultValue={local.nome}
      {...register("nome", {
       required: "Nome do local obrigatório",
       maxLength: 50,
       minLength: 3
      })}
     />
     <CTextField
      label="CEP"
      variant="standard"
      fullWidth
      type="number"
      disabled={isDisabled}
      defaultValue={local.cep}
      {...register("cep", {
       required: "CEP obrigatório",
       maxLength: 8,
       minLength: 8,
       onBlur: () => buscarCep(getValues, setValue)
      })}
     />
    </div>
    <div className={styles.inputsEndereco}>
     <CTextField
      label="Logradouro"
      variant="standard"
      fullWidth
      type="text"
      disabled
      defaultValue={local.endereco}
      {...register("endereco")}
     />
     <CTextField
      label="Cidade"
      variant="standard"
      fullWidth
      type="text"
      disabled
      defaultValue={local.cidade}
      {...register("cidade")}
     />
     <CTextField
      label="Estado"
      variant="standard"
      fullWidth
      type="text"
      disabled
      defaultValue={local.estado}
      {...register("estado")}
     />
    </div>
    <div className={styles.inputsTriplo}>
     <CTextField
      label="Latitude"
      variant="standard"
      disabled={isDisabled}
      fullWidth
      type="text"
      defaultValue={local.latitude}
      {...register("latitude", {
       required: "Latitude obrigatoria"
      })}
     />
     <CTextField
      label="Longitude"
      variant="standard"
      fullWidth
      disabled={isDisabled}
      type="text"
      defaultValue={local.longitude}
      {...register("longitude", {
       required: "Longitude obrigatoria"
      })}
     />
     <CTextField
      label="Tipo"
      variant="standard"
      select
      disabled={isDisabled}
      fullWidth
      defaultValue={local.tipo}
      {...register("tipo", { required: "Tipo obrigatorio" })}>
      {tipos.map((tipo) => (
       <MenuItem key={tipo} value={tipo}>
        {tipo}
       </MenuItem>
      ))}
     </CTextField>
    </div>
    <CTextField
     label="Descrição"
     variant="standard"
     fullWidth
     type="text"
     disabled={isDisabled}
     multiline
     defaultValue={local.descricao}
     {...register("descricao", {
      required: "Descrição obrigatoria",
      maxLength: 283
     })}
    />
    <div className={styles.buttons}>
     <CButton
      type="submit"
      onClick={
       isDisabled
        ? (e) => {
           e.preventDefault();
           setIsDisabled(!isDisabled);
           reset(local);
          }
        : () => setIsDisabled(!isDisabled)
      }
      variant="contained"
      sx={
       isDisabled
        ? {
           backgroundColor: "#01161e",
           color: "#eff6e0",
           "&:hover": { backgroundColor: "#124559", color: "#eff6e0" }
          }
        : {
           backgroundColor: "#649000",
           color: "#eff6e0",
           "&:hover": { backgroundColor: "#324800", color: "#eff6e0" }
          }
      }>
      {isDisabled ? "Editar" : "Salvar"}
     </CButton>
     <CButton
      onClick={() => deleteLocal(local.id)}
      variant="outlined"
      sx={{
       color: "#990000",
       borderColor: "#990000",
       "&:hover": {
        backgroundColor: "#990000",
        color: "white"
       }
      }}>
      Excluir
     </CButton>
    </div>
   </form>
  </div>
 );
}

export default LocalForm;
