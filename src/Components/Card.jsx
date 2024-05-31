import React from 'react'
import img1 from '../assets/img1.jfif'
import './Card.css'

const Card = () => {
  return (
    <>
     <div class="card">
                <div class="card-header">
                <img src={img1} alt="imge1"/>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Habitación Campestre</h3>
                    <p class="card-description">Lorem ipsum dolor sit amet kshfdkajhfjkahfjkldwfkhadklfhdlkjfahdkjfhdjklfhdjkflsdadklghakljghkjo</p>
                    <div class="card-items">
                    <h5>Ambientes: 3</h5>
                    <h5>Piso: Planta baja</h5>
                    <h5>Ubicación: Las Toninas</h5>
                    </div>
                    <a href="#" class="btn">Ver más</a>
                </div>
            </div>
    </>
  )
}

export default Card
