import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Error404 from './Pages/Error404'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Admin from './Pages/Admin'
import Footer from './Components/Footer'
function App() {
  

  return (
    <>
      <BrowserRouter>
          <Header/>
              <Routes>
                  <Route exact path='/' element= <Home/> />
                  <Route exact path='Home' element= <Home/> />
                  <Route exact path='*' element= <Error404/> />
                  <Route exact path='/About' element= <About/> />
                  <Route exact path='/Contact' element= <Contact/> />
                  <Route exact path='/Admin' element= <Admin/> />
              </Routes>
          <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
