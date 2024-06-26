
import './Home.css'

import Promo1 from '../assets/promo1.jpeg'
import promo2 from '../assets/promo2.jpeg'
import CardContainer from '../Components/CardContainer'
import Carrousel from '../Components/Carrousel'
import Filtros from '../Components/Filtros'
import { useState } from 'react'


const Home = () => {
  const [filtros, setFiltros] = useState({ estado: "", dormitorios: "" });

  const handleFilterChange = (newFilters) => {
    setFiltros(newFilters);
  };

  return (
    <>
    
      <div className='article '>
        
        <Carrousel/>

      </div>
      <div className="imagenes">
          <img src={Promo1} alt="promo 1" className='promos'/>
          <img src={promo2} alt="promo 2" className='promos' />
      </div>  
      <Filtros onFilterChange={handleFilterChange} />
      <CardContainer filtros={filtros} />
            
    </>
  )
}

export default Home
