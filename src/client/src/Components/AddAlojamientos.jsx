import React, { useState, useEffect } from "react";
import "./AddAlojamientos.css";
import { useNavigate, useParams } from "react-router-dom";

const AddAlojamiento = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoAlojamiento, setTipoAlojamiento] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [precioPordia, setPrecioPorDia] = useState("");
  const [cantidadDormitorios, setCantidadDormitorios] = useState("");
  const [cantidadBanios, setCantidadBanios] = useState("");
  const [estado, setEstado] = useState("disponible");
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id)
  if (isEditing){
    console.log("true")
  }
  else {
    console.log("false")
  }

  useEffect(() => {
    if (isEditing) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:3001/alojamiento/getAlojamiento/` + id
          );
          const data = await response.json();
          setTitulo(data.Titulo);
          setDescripcion(data.Descripcion);
          setTipoAlojamiento(data.TipoAlojamiento);
          setLatitud(data.Latitud);
          setLongitud(data.Longitud);
          setPrecioPorDia(data.PrecioPorDia);
          setCantidadDormitorios(data.CantidadDormitorios);
          setCantidadBanios(data.CantidadBanios);
          setEstado(data.Estado);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [id, isEditing]);

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
      const url = isEditing
        ? `http://localhost:3001/alojamiento//putAlojamiento/` + id
        : "http://localhost:3001/alojamiento/createAlojamiento";

      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(json),
      });
      if (response.ok) {
        alertify.alert("IDW Check-In", isEditing ?  "Alojamiento actualizado con exito" : "Alojamiento creado con exito");
        navigate("/Alojamientos");
      } else {
        alertify.alert("Error!!!", "No se pudo realizar la operación! ");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="form-alojamiento">
        <h2>{isEditing ? "Editar alojamiento" : "Alta alojamiento"}</h2>
        <form onSubmit={enviar} className="form-alojamiento-container">
          <label htmlFor="titulo">Titulo</label>
          <input
            className="controls"
            required
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label htmlFor="descripcion">Descripción</label>
          <textarea
            className="controls"
            rows="4"
            required
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <label htmlFor="tipoAlojamiento">Tipo de alojamiento</label>
          <input
            className="controls"
            required
            type="text"
            id="tipoAlojamiento"
            value={tipoAlojamiento}
            onChange={(e) => setTipoAlojamiento(e.target.value)}
          />

          <label htmlFor="latitud">Latitud</label>
          <input
            className="controls"
            required
            type="text"
            id="latitud"
            value={latitud}
            onChange={(e) => setLatitud(e.target.value)}
          />

          <label htmlFor="logitud">Logitud</label>
          <input
            className="controls"
            required
            type="text"
            id="logitud"
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
          />

          <label htmlFor="precioPorDia">Precio por día en U$</label>
          <input
            className="controls"
            required
            type="text"
            id="precioPorDia"
            value={precioPordia}
            onChange={(e) => setPrecioPorDia(e.target.value)}
          />

          <label htmlFor="cantidadDormitorios">Cantidad de dormitorios</label>
          <input
            className="controls"
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
            className="controls"
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
            className="controls"
            name="estado"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="disponible">Disponible</option>
            <option value="reservado">Reservado</option>
          </select>
          <button className="btn-alojamiento" type="submit">
          {isEditing ? "Guardar alojamiento" : "Crear alojamiento"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddAlojamiento;
