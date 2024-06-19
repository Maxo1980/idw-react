import React from "react";
import img1 from "../assets/img1.jfif";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img src={props.imagen} alt="imge1" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{props.titulo}</h3>
          <p className="card-description">{props.descripcion}</p>
          <div className="card-items">
            <div className="diponible">
              <h5>Ambientes: {props.ambientes}</h5>
              <h5>Piso: {props.piso}</h5>
              <h5>Ubicación: {props.ubicacion}</h5>
            </div>
            <button className="btn-diponible">No Disponible</button>
          </div>
          <a href="#" className="btn">
            Ver más
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
