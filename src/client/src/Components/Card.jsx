// Card.js
import React from "react";
import imagen from "../assets/casa.jpg";
import "./Card.css";

const Card = (props) => {
  const getButtonStyle = () => {
    let buttonStyle = "";
    let buttonText = "";
    
    switch (props.estado) {
      case "Disponible":
        buttonStyle = "btn-disponible";
        buttonText = "DISPONIBLE";
        break;
      case "Reservado":
        buttonStyle = "btn-reservado";
        buttonText = "RESERVADO";
        break;
      default:
        buttonStyle = "btn-desconocido";
        buttonText = "Desconocido";
        break;
    }

    return { style: buttonStyle, text: buttonText };
  };

  const { style, text } = getButtonStyle();
  

  return (
    <div className="card">
      <div className="card-header">
      {props.imagenes && props.imagenes.length > 0 ? (
          props.imagenes.map((rutaArchivo, index) => (
            <img
              key={index}
              src={rutaArchivo}
              alt={`Imagen ${index + 1}`}
              className="imagen-alojamiento"
            />
          ))
        ) : (
          <img src="/default_image.jpg" alt="Imagen por defecto" />
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.titulo}</h3>
        <p className="card-description">{props.descripcion}</p>
        <div className="card-items">
          <div className="disponible">
            <h5>Dormitorios: {props.dormitorios}</h5>
            <h5>Baños: {props.banios}</h5>
            <h5>Tipo de propiedad: {props.tipo}</h5>
            <h5>Estado: {props.estado}</h5>
            <h5>Precio: ${props.precio}</h5>
          </div>
          <button className={style}>{text}</button>
        </div>
        <button className="btn" onClick={() => props.onMoreInfo({
          titulo: props.titulo,
          descripcion: props.descripcion,
          dormitorios: props.dormitorios,
          banios: props.banios,
          tipo: props.tipo,
          estado: props.estado,
          latitud: props.latitud,
          longitud: props.longitud,
          precio: props.precio
        })}>
          VER MÁS
        </button>
      </div>
    </div>
  );
};

export default Card;
