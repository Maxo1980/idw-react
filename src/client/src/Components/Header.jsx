import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../assets/logo_verde.png'
const Header = () => {

  
  return (
    <>
      <header className='Header'>
          <nav className='navbar navbar-expand-lg navbar-light nav-style'>
              <div className="logo">
                  <Link to='/home'>
                  <img src={Logo} alt="logo" />
                  <span>IDW Check-In</span>
                  </Link>
              </div>
              <div className='telefono'>
                  <span><i className="fa-solid fa-phone"></i>  0800-1234-5678</span>
                  <span className='horas'>De lunes a Domingo de 8 a 18hs.</span>
              </div>
              <Link to='/admin'> <button>Adminstrador</button> </Link>
          </nav>
          <nav className='navbar navbar-expand-lg navbar-light navega '>
              <Link to='/home'> <h5>Inicio</h5> </Link>
              <Link to='/about'><h5>Quienes somos</h5> </Link>
              <Link to='/contact'> <h5>Contacto</h5> </Link>
              <h5> <i className="fa-solid fa-magnifying-glass"></i> Buscar</h5>
          </nav>
      </header>
    </>
  )
}

export default Header
