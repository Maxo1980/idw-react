import React from "react";
import "./About.css";
import img from "../assets/equipoDeTrabajo.jpg";
import Logo from "../assets/logo_verde.png";

const About = () => {
  return (
    <div className="contenedor">
      <div className="about">
        <img src={img} alt="" />
      </div>
      <div className="texto">
        <div className="logo">
      <img className="logo-img" src={Logo} alt="Logo" />
        <h6 className="titulo"> ¡ Bienvenido a CASA VISTA INN !</h6>
        </div>
        <p className="cuerpo">
          En CASA VISTA INN, estamos dedicados a simplificar tu proceso de
          registro para que puedas comenzar tu viaje con facilidad y sin
          complicaciones. Nuestra avanzada tecnología y nuestro equipo altamente
          capacitado están aquí para garantizar que tu experiencia de check-in
          sea rápida, eficiente y sin estrés. En CASA VISTA INN, nos comprometemos a
          proporcionarte un servicio personalizado y amigable en cada
          interacción. Ya sea que estés viajando por negocios o por placer,
          estamos aquí para hacer que tu experiencia de check-in sea lo más
          fluida y agradable posible. Confía en CASA VISTA INN para brindarte un
          servicio excepcional desde el momento en que llegas. ¡Estamos aquí
          para hacer que tu viaje comience de la mejor manera posible!
        </p>
        <h6 className="saludo">El equipo de trabajo CASA VISTA INN</h6>
      </div>
    </div>
  );
};

export default About;
