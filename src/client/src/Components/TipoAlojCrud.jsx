import React, { useEffect, useState } from 'react'
import './TipoAlojCrud.css'

const TipoAlojCrud = () => {

  const [tabla, setTabla] = useState([])
    
  //Traer data desde la API
  
  const URLDATA =  'http://localhost:3001/tiposAlojamiento/getTiposAlojamiento'
  const URLDELETE = 'http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/'

  //MOSTRAR DATOS DE LA BD
   const showData = async () => {
    try{
      const response = await fetch(URLDATA)
      const data = await response.json()
      setTabla(data)
    }catch(error){
      alertify.alert('Error!', 'No se pudo conectar con la base de datos!', 
      function(){ alertify.error('No de pudo conectar con la DB'); });


    }
  }
  useEffect(() => {
     showData();
  }, [])
 

   //BORRAR DATOS

   const borrarDatos = async (dato) => {
    alertify.confirm('Se borrará el registro Nro: '+dato, 'Esta operación no se puede deshacer. ¿Desea continuar?',  
      async function(){
        await fetch(URLDELETE+dato, {
          method: 'DELETE' 
          })
          showData();
           },
          function(){ alertify.error('Operación cancelada!')});
     }
   const editarDatos = async (dato) => {
    console.log(dato)
   }

  return (
   <>
     
        
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
    
  </>
  )
}

export default TipoAlojCrud



