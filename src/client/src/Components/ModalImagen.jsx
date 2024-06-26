
import React, { useState } from "react";
import "./ModalImagen.css";

const ModalImagen = ({ isOpen, onClose, alojamientoId }) => {
  if (!isOpen) return null;
  const [rutaArchivo, setRutaArchivo] = useState("");
  

  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      idAlojamiento: alojamientoId,
      RutaArchivo: rutaArchivo
    };

    try {
      const url = "http://localhost:3001/imagen/createImagen";
      const method = "POST";
      const response = await fetch(url, {
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(json),
      });

      if (response.ok) {
        alertify.alert(
          "CASA VISTA INN",
          `Imagen agregada con exito con exito al registo: ${alojamientoId}`
        );
        navigate("/Alojamientos");

       
      } else {
        alertify.alert("Error!!!", "No se pudo realizar la operación! ");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <div className="custom-modal-header">
          <h2>Cargar Imagen a registro #{alojamientoId}</h2>
          <button className="custom-modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="custom-modal-body">
          <form onSubmit={enviar}>
            <label htmlFor="titulo">Ingrese URL imagen </label>
            <input
              className=""
              required
              type="text"
              id="rutaArchivo"
              value={rutaArchivo}
              onChange={(e) => setRutaArchivo(e.target.value)}
            />
            <button type="submit">Salvar </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalImagen;
