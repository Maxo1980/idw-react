import React from 'react'
import './Home.css'
import Portada from '../assets/article.jpg'
import Promo1 from '../assets/promo1.jpeg'
import promo2 from '../assets/promo2.jpeg'
import CardContainer from '../Components/CardContainer'
import Carrousel from '../Components/Carrousel'

const Home = () => {
  return (
    <>
    
      <div className='article '>
        
        <Carrousel/>

      </div>
      <div className="imagenes">
          <img src={Promo1} alt="promo 1" className='promos'/>
          <img src={promo2} alt="promo 2" className='promos' />
      </div>  
      <CardContainer />
            
    </>
  )
}

export default Home
