import React from 'react'
import './ModalIngreso.css'
import Add from './Add'

const Modalingreso = ( {OnCancelar, onClose}) => {
  return (
    <>
         <div className="modal-container">
            <div className="mod">
                <div className="modal-header">
                    <p className='close' onClick={() => onClose()}>&times;</p>
                    </div>
                    <div className="modal-content">
                        <Add />
                    </div>
                    <div className="modal-footer">
                        <button className='but btn-cerrar' onClick={() => OnCancelar()}>Cancelar</button>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Modalingreso
