import React from 'react'
import img1 from '../assets/img1.jfif'
import './Card.css'

const Card = () => {
  return (
    <>
     <div className="card">
                <div className="card-header">
                <img src={img1} alt="imge1"/>
                </div>
                <div className="card-body">
                    <h3 className="card-title">Habitación Campestre</h3>
                    <p className="card-description">Lorem ipsum dolor sit amet kshfdkajhfjkahfjkldwfkhadklfhdlkjfahdkjfhdjklfhdjkflsdadklghakljghkjo</p>
                    <div className="card-items">
                        <div className="diponible">
                        <h5>Ambientes: 3</h5>
                        <h5>Piso: Planta baja</h5>
                        <h5>Ubicación: Las Toninas</h5>
                        </div>
                        <button className='btn-diponible' >No Disponible</button>
                    </div>
                    <a href="#" className="btn">Ver más</a>
                </div>
            </div>
    </>
  )
}

export default Card
