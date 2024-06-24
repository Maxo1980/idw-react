
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Error404 from './Pages/Error404'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Admin from './Pages/Admin'
import Footer from './Components/Footer'
import TiposAlojamiento from './Pages/tiposAlojamiento'
import Alojamientos from './Pages/Alojamientos'
import Servicios from './Pages/Servicios'
import AddTipoAlojamiento from './Pages/AddTipoAlojamiento'
import AddAlojamiento from './Pages/AddAlojamiento'
import AddServicio from './Pages/AddServicio'
import Imagens from './Pages/Imagens'
import AddImagen from './Pages/AddImagen'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Header/>
              <Routes>
                  <Route exact path='/' element= {<Home/>} />
                  <Route exact path='Home' element= {<Home/>} />
                  <Route exact path='*' element= {<Error404/>} />
                  <Route exact path='/About' element= {<About/>} />
                  <Route exact path='/Contact' element= {<Contact/>} />
                  <Route exact path='/Admin' element= {<Admin/>} />
                  <Route exact path='/TiposAlojamiento' element= {<TiposAlojamiento/>} />
                  <Route exact path='/Alojamientos' element= {<Alojamientos/>} />
                  <Route exact path='/Servicios' element= {<Servicios/>} />
                  <Route exact path='/Imagenes' element= {<Imagens/>} />
                  <Route exact path='/AddAlojamiento' element= {<AddAlojamiento/>} />
                  <Route exact path='/editAlojamiento/:id' element= {<AddAlojamiento />} />
                  <Route exact path='/AddTipoAlojamiento' element= {<AddTipoAlojamiento/>} />
                  <Route exact path='/edit/:id' element= {<AddTipoAlojamiento/>} />
                  <Route exact path='/AddServicio' element= {<AddServicio/>} />
                  <Route exact path='/EditServicio/:id' element= {<AddServicio/>} />
                  <Route exact path='/addimagen' element= {<AddImagen/>} />

              </Routes>
          <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
