
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";
import "./Card.css";

const CardContainer = ({ filtros }) => {
  const [datosOriginales, setDatosOriginales] = useState([]);
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const URL = "http://localhost:3001/alojamiento/getAlojamientos";
  const URLIMAGENES = "http://localhost:3001/imagen/getAllImagenes";

  const showData = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos");
      }
      const data = await response.json();
      setDatosOriginales(data);
      setDatosFiltrados(data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const obtenerImagenes = async () => {
    try {
      const response = await fetch(URLIMAGENES);
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos de imágenes");
      }
      const data = await response.json();
      setImagenes(data);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  useEffect(() => {
    showData();
    obtenerImagenes();
  }, []);

  useEffect(() => {
    // Aplicar filtros sobre los datos originales
    const filteredData = datosOriginales.filter((d) => {
      let passEstado = true;
      let passDormitorios = true;

      // Filtrar por estado si está seleccionado
      if (filtros.estado && d.Estado !== filtros.estado) {
        passEstado = false;
      }

      // Filtrar por cantidad de dormitorios si está seleccionado
      if (filtros.dormitorios && d.CantidadDormitorios !== parseInt(filtros.dormitorios)) {
        passDormitorios = false;
      }

      return passEstado && passDormitorios;
    });

    setDatosFiltrados(filteredData);
  }, [filtros, datosOriginales]);

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
      {datosFiltrados.map((d, index) => (
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
          imagenes={imagenes.filter((img) => img.idAlojamiento === d.idAlojamiento).map((img) => img.RutaArchivo)}
          onMoreInfo={openModal}
        />
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal} cardData={selectedCard} />
    </div>
  );
};

export default CardContainer;
