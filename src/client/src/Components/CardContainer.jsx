import React from "react";
import Card from "./Card";
import "./Card.css";
import Casa from "../assets/casa.jpg";
import Cabania from "../assets/cabaña.jpg";
import Hotel from "../assets/hotel.jpg";
import Depto from "../assets/depto.jpg";

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        titulo="Casa"
        descripcion="Hermosa casa moderna de tres ambientes a las afueras de la ciudad con amplio parque, piscina y terraza. "
        imagen={Casa}
        ambientes="3"
        piso="Planta baja"
        ubicacion="Nordelta"
      />
      <Card
        titulo="Cabaña"
        descripcion="Cabaña pintoresca en el interior de la provincia de dos ambientes con enorme parque de uso compartido. "
        imagen={Cabania}
        ambientes="2"
        piso="Planta baja"
        ubicacion="San Martin de los Andes"
      />
      <Card
        titulo="Hotel"
        descripcion="Hotel de 25 habitaciones en suite con todos los servicios incluídos y piscina de uso compartido."
        imagen={Hotel}
        ambientes="4"
        piso="Todos"
        ubicacion="Mendoza"
      />
      <Card
        titulo="Departamento"
        descripcion="Departamento con mucho verde, muy amplio de dos ambientes con estacionamiento y terraza de uso compartido."
        imagen={Depto}
        ambientes="2"
        piso="2do. Piso"
        ubicacion="Pilar"
      />
    </div>
  );
};

export default CardContainer;
