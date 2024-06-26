import React, { useRef, useState } from "react";
import "./Footer.css";
import Logo from "../assets/logo_verde.png";
const Footer = () => {
  const [email, setEmail] = useState("");
  const form = useRef();

  const enviar = (e) => {
    e.preventDefault();
    alertify.alert(
      email,
      "Ya estas Subscripto! ahora no te vas a perder ninguna novedad! "
      
    );
    form.current.reset();
  };

  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col suscribe">
            <i className="fa-regular fa-envelope"></i>
            <h5>No te pierdas ninguna promoción</h5>

            <form ref={form} action="formulario" onSubmit={enviar}>
              <input
                className="input"
                type="mail"
                placeholder="Ingresá tu mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">Suscribirme </button>
            </form>
          </div>
        </div>
        
        <div className="row">
          <div className="col copy">
            <h6 className="derechos">CopyLeft 2024 (ɔ)</h6>
            <h6 className="brand">CASA VISTA INN  </h6>
            <h6 className="city">Av. Fake 123 - Ciudad Autonoma de Sion</h6>
          </div>
          <div className="col tel">
            <p className="ventas">Ventas</p>
            <p>
              <i className="fa-solid fa-phone icon"></i> 0800-1234-5678
            </p>
            <p>
              <i className="fa-brands fa-whatsapp icon"></i> +5411+6026-1234
            </p>
            <p className="horas">De Lunes a Domingos de 8hs. a 18hs</p>
          </div>
          <div className="col social">
            <a href="http://twitter.com" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="http://instagram.com" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="http://facebook.com" target="_blank">
              {" "}
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="http://tiktok.com" target="_blank">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://web.telegram.org/" target="_blank">
              {" "}
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="http://linkedin.com" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
