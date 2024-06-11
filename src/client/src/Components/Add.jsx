import React, { useState } from 'react'
import './Add.css'



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
                    
                    alert('Se creo correctamente el Alojamiento tipo');
                }
                else{
                    
                    alert('Error al crear el Alojamiento tipo')
                }
           
            
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className='form-container'>
        <h2>Alta tipo alojamiento</h2>
        <form onSubmit={enviar}>
            <div>
                <label htmlFor='descripcion'>Descripcion</label>
                <input
                    required 
                    type="text"
                    id='descripcion'
                    value={descripcion}
                    onChange={(e) => SetDescripcion(e.target.value)} 
                />
            </div>
            <button className='btn-add' type='submit'>Agregar</button>
        </form>
        
    </div>
  )
}

export default Add
