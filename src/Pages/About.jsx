import React from 'react'
import './About.css'
import img from '../assets/equipoDeTrabajo.jpg'

const About = () => {
  return (
    <div className="contenedor">
        <div className='about'>
          <img src={img} alt="" />
        </div>
        <div className="texto">
          <h6 className='titulo'> ¡Bienvenido a IDW Check In!</h6>
          <p className='cuerpo'>
            En IDW Check In, estamos dedicados a simplificar tu proceso de registro para que puedas comenzar tu viaje con facilidad y sin complicaciones. Nuestra avanzada tecnología y nuestro equipo altamente capacitado están aquí para garantizar que tu experiencia de check-in sea rápida, eficiente y sin estrés.
            En I    DW, nos comprometemos a proporcionarte un servicio personalizado y amigable en cada interacción. Ya sea que estés viajando por negocios o por placer, estamos aquí para hacer que tu experiencia de check-in sea lo más fluida y agradable posible.
            Confía en IDW Check In para brindarte un servicio excepcional desde el momento en que llegas. ¡Estamos aquí para hacer que tu viaje comience de la mejor manera posible!
          </p>
          <h6 className='saludo'>El equipo de trabajo IWD Check-in</h6>
        </div>

    </div>


  )
}

export default About
