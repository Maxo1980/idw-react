import React from "react";
import Admin from "./Admin";
import TablaServicios from "../Components/TablaServicios";
import { Link } from 'react-router-dom'

const Servicios = () => {
  return (
    <>
      <Admin />
      <Link to='/AddServicio' ><i class="fa-solid fa-circle-plus agregar"> AGREGAR</i></Link> 

      <TablaServicios />
    </>
  );
};

export default Servicios;
