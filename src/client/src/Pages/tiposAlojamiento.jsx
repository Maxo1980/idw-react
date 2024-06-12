import React from 'react'
import Admin from './Admin'
import './tiposAlojamiento.css'
import TipoAlojCrud from '../Components/TipoAlojCrud'
import { Link } from 'react-router-dom'


const tiposAlojamiento = () => {
  return (
   <>
        <Admin/>
               <Link to='/AddTipoAlojamiento' ><i class="fa-solid fa-circle-plus agregar"> AGREGAR</i></Link> 
        <TipoAlojCrud/>
   </>
 )}
  


export default tiposAlojamiento
