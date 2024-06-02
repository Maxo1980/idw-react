import React, { useEffect, useState } from 'react'
import './Admin.css'
import Tabla from '../Components/Tabla'
import Modalingreso from '../Components/Modalingreso'



const Admin = () => {

  const handleButonClick = () => {
    setModalOpen(false)
  }

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <div className='ingreso-container'>
        
        <button className='btn1' onClick={() => setModalOpen(true)}>Ingresar nuevo alojamiento</button>
      
    </div>
      <Tabla />
    {modalOpen && (
     <Modalingreso
        OnCancelar={handleButonClick} onClose={handleButonClick}
      />
     )}
    
    
    

    </>
  )
}

export default Admin
