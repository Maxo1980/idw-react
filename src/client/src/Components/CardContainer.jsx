// CardContainer.js
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";
import "./Card.css";

const CardContainer = () => {
  const [datos, setDatos] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const URL = "http://localhost:3001/alojamiento/getAlojamientos";

  const showData = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos");
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const openModal = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <div className="card-container">
      {datos.map((d, index) => (
        <Card
          key={index}
          titulo={d.Titulo}
          descripcion={d.Descripcion}
          latitud={d.Latitud}
          longitud={d.Longitud}
          precio={d.PrecioPorDia}
          dormitorios={d.CantidadDormitorios}
          banios={d.CantidadBanios}
          estado={d.Estado}
          tipo={d.TipoAlojamiento}
          onMoreInfo={openModal}
        />
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal} cardData={selectedCard} />
    </div>
  );
};

export default CardContainer;
