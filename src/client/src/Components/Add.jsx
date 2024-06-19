import React, { useState } from 'react'
import './Add.css'
import { Link } from 'react-router-dom'



const Add = () => {
    const [descripcion, SetDescripcion] = useState('')
    
    const enviar = async (e) => {
        e.preventDefault();
        const json = {
            Descripcion: descripcion
        }
        //Conexion a la API
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento',{
                method: 'POST',
                headers:  {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(json),    
            });
                if (response.ok){
                    
                    alertify.alert('IDW Check-In', 'Tipo de alojamiento creado con exito');
                      
                }
                else{
                    
                    alertify.alert('Error!!!', 'No se pudo crear el tipo de alojamiento!');
                }
           
            
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <>
        <h2>Alta tipo alojamiento</h2>
      <div className='form-container'>
        <form onSubmit={enviar}>
        
           
                <label htmlFor='descripcion'>Descripción</label>
                <input
                    required 
                    type="text"
                    id='descripcion'
                    value={descripcion}
                    onChange={(e) => SetDescripcion(e.target.value)} 
                />
           
            <button className='btn-add' type='submit'>Agregar</button>
        
        </form>
    </div>
    <Link to='/TiposAlojamiento'>
    <h3>
        <i class="fa-solid fa-left-long back">   Volver a listado</i>   
    </h3>
    </Link>
    </>
  )
}

export default Add
