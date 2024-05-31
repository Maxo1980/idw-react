import React from 'react'
import './Carrousel.css'
import img1 from '../assets/article.jpg'
import img2 from '../assets/article2.jpg'
import img3 from '../assets/article3.jpg'
const Carrousel = () => {
  return (
    <div className='container'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={img1} class="d-block w-100" alt="Lago"/>
        </div>
    <div className="carousel-item">
      <img src={img2} class="d-block w-100" alt="vaciones"/>
    </div>
    <div className="carousel-item">
      <img src={img3} class="d-block w-100" alt="familia"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Carrousel
