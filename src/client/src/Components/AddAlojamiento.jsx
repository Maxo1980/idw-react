import React, { useState } from "react";
import "./AddAlojamiento.css";

const AddAlojamiento = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoAlojamiento, setTipoAlojamiento] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [precioPordia, setPrecioPorDia] = useState("");
  const [cantidadDormitorios, setCantidadDormitorios] = useState("");
  const [cantidadBanios, setCantidadBanios] = useState("");
  const [estado, setEstado] = useState("");

  const enviar = async (e) => {
    e.preventDefault();

    const json = {
      Titulo: titulo,
      Descripcion: descripcion,
      TipoAlojamiento: tipoAlojamiento,
      Latitud: latitud,
      Longitud: longitud,
      PrecioPorDia: precioPordia,
      CantidadDormitorios: cantidadDormitorios,
      CantidadBanios: cantidadBanios,
      Estado: estado,
    };
    try {
      const response = await fetch(
        "http://localhost:3001/alojamiento/createAlojamiento",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(json),
        }
      );
      if (response.ok) {
        alertify.alert("IDW Check-In", "Alojamiento creado con exito");
      } else {
        alertify.alert("Error!!!", "No se pudo crear el alojamiento!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h2>Alta Alojamiento</h2>
      <div className="form-alojamiento">
        <form onSubmit={enviar} className="form-alojamiento-container">
          <label htmlFor="titulo">Titulo</label>
          <input
            required
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label htmlFor="descripcion">Descripcion</label>
          <input
            required
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <label htmlFor="tipoAlojamiento">Tipo de alojamiento</label>
          <input
            required
            type="text"
            id="tipoAlojamiento"
            value={tipoAlojamiento}
            onChange={(e) => setTipoAlojamiento(e.target.value)}
          />

          <label htmlFor="latitud">Latitud</label>
          <input
            required
            type="text"
            id="latitud"
            value={latitud}
            onChange={(e) => setLatitud(e.target.value)}
          />

          <label htmlFor="logitud">Logitud</label>
          <input
            required
            type="text"
            id="logitud"
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
          />
          
          <label htmlFor="precioPorDia">Precio por día</label>
          <input
            required
            type="text"
            id="precioPorDia"
            value={precioPordia}
            onChange={(e) => setPrecioPorDia(e.target.value)}
          />

          <label htmlFor="cantidadDormitorios">Cantidad de dormitorios</label>
          <input
            required
            type="number"
            min="1"
            max="10"
            step="1"
            id="cantidadDormitorios"
            value={cantidadDormitorios}
            onChange={(e) => setCantidadDormitorios(e.target.value)}
          />

          <label htmlFor="cantidadbanios">Cantidad de baños</label>
          <input
            required
            type="number"
            min="1"
            max="10"
            step="1"
            id="cantidadBanios"
            value={cantidadBanios}
            onChange={(e) => setCantidadBanios(e.target.value)}
          />

          <label htmlFor="estado">Estado</label>
          <select
            name="estado"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="disponible">Disponible</option>
            <option value="reservado">Reservado</option>
          </select>
          <button className="btn-alojamiento" type="submit">
            Agregar alojamiento
          </button>
        </form>
      </div>
    </>
  );
};

export default AddAlojamiento;
