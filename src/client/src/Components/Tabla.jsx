import React, { useState } from 'react'
import './Tabla.css'

const Tabla = () => {

  const [tabla, setTabla] = useState([])
  
  //Traer data desde la API
  
  const URL =  'http://localhost:3001/tiposAlojamiento/getTiposAlojamiento'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setTabla(data)
  }
   showData()

   //Borrar datos

   const borrarDatos = (del) => {
      

      
   }
  return (
    <div className='tabla-container'>
        <table className='tabla'>
          <thead className='tabla-head'>
            <th>#ID</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            {
              tabla.map ( (datos) => (
                 <tr key={datos.idTipoAlojamiento}>
                  <td>{datos.idTipoAlojamiento}</td>
                  <td>{datos.Descripcion}</td>
                  <td>
                    <button className='tabla-btn-edit'>Editar</button>
                    <button className='tabla-btn-del' onClick={borrarDatos(datos.idTipoAlojamiento)}>Borrar</button>
                  </td>
                 </tr> 
              ))}
          </tbody>
        </table>

    </div>
  )
}

export default Tabla
