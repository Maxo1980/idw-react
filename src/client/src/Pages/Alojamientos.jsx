import React from "react";
import Admin from "./Admin";
import TablaAlojamientos from "../Components/TablaAlojamientos";
import { Link } from "react-router-dom";

const Alojamientos = () => {
  return (
    <>
      <Admin />
      <Link to='/AddAlojamiento' ><i class="fa-solid fa-circle-plus agregar"> AGREGAR</i></Link> 

      <TablaAlojamientos />
    </>
  );
};

export default Alojamientos;
