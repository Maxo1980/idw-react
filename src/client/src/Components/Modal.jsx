// Modal.js
import React from "react";
import "./Modal.css";
import Map from "./Map";

const Modal = ({ isOpen, onClose, cardData }) => {
  if (!isOpen || !cardData) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <div className="custom-modal-header">
          <h2>{cardData.titulo}</h2>
          <button className="custom-modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="custom-modal-body">
          <Map latitud={cardData.latitud} longitud={cardData.longitud}></Map>
          <p>
            <strong>Descripción:</strong> {cardData.descripcion}
          </p>
          <p>
            <strong>Dormitorios:</strong> {cardData.dormitorios}
          </p>
          <p>
            <strong>Baños:</strong> {cardData.banios}
          </p>
          <p>
            <strong>Tipo:</strong> {cardData.tipo}
          </p>
          <p>
            <strong>Estado:</strong> {cardData.estado}
          </p>
          <p>
            <strong>Latitud:</strong> {cardData.latitud}
          </p>
          <p>
            <strong>Longitud:</strong> {cardData.longitud}
          </p>
          <p>
            <strong>Precio por día:</strong> {cardData.precio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
