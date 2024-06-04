import React, { useState } from 'react'
import './Tabla.css'

const Tabla = () => {

  const [tabla, setTabla] = useState([])
  const [del, setDel] = useState('')
  
  //Traer data desde la API
  
  const URLDATA =  'http://localhost:3001/tiposAlojamiento/getTiposAlojamiento'
  const URLDELETE = 'http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/:id'

  //BUSCAR Y MOSTRAR DATOS DE LA BD
  const showData = async () => {
    const response = await fetch(URLDATA)
    const data = await response.json()
    setTabla(data)
  }
   showData()

   //BORRAR DATOS

   const borrarDatos = async (dato) => {
    console.log(dato)
    // const reponse = await fetch(URLDELETE+dato, {
    //   method: 'DELETE'
    // })
    // const data = await await reponse.json()
    // setDel(data)      
   }
   
   const editarDatos = async (dato) => {
    console.log(dato)
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
                    <button className='tabla-btn-edit'onClick={() => editarDatos(datos.idTipoAlojamiento)} >Editar</button>
                    <button className='tabla-btn-del' onClick={() => borrarDatos(datos.idTipoAlojamiento)}>Borrar</button>
                  </td>
                 </tr> 
              ))}
          </tbody>
        </table>

    </div>
  )
}

export default Tabla
