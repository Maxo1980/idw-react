import React from "react";
import Admin from "./Admin";
import TablaImagenes from "../Components/TablaImagenes";
import { Link } from 'react-router-dom'
const Imagens = () => {
  return (
    <>
      <Admin />
      <Link to='/addimagen' ><i class="fa-solid fa-circle-plus agregar"> AGREGAR</i></Link> 

      <TablaImagenes/>
    </>
  );
};

export default Imagens;
