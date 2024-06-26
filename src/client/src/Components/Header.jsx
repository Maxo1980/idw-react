import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo_verde.png";
const Header = () => {
  return (
    <>
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-light nav-style">
          <div className="logo">
            <Link to="/home" className="idw">
              <img src={Logo} alt="logo" />
              <span>CASA VISTA INN</span>
            </Link>
          </div>
          <div className="telefono">
            <span>
              <i className="fa-solid fa-phone phone" ></i> 0800-1234-5678
            </span>
            <span className="horas">De lunes a Domingo de 8 a 18hs.</span>
          </div>
          <Link to="/Alojamientos">
            <i className="fa-solid fa-user admin-ico"><button className="btn-admin">Adminstrador</button></i>
            
          </Link>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light navega ">
          <Link to="/home">
            
            <h5>INICIO</h5>
          </Link>
          <Link to="/about">
            <h5>QUIENES SOMOS</h5>
          </Link>
          <Link to="/contact">
            
            <h5>CONTACTO</h5>
          </Link>
          
        </nav>
      </header>
    </>
  );
};

export default Header;
