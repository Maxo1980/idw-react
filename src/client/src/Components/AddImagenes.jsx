import React, { useState, useEffect } from "react";
import "./AddImagenes.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const AddImagenes = () => {
  const location = useLocation();
  const [idAlojamiento, setIdAlojamiento] = useState("");
  const [rutaArchivo, setRutaArchivo] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      // Cargar datos si vienen del componente Tabla
      setIdAlojamiento(location.state.idAlojamiento);
      setRutaArchivo(location.state.RutaArchivo);
      setId(location.state.idImagen);
    }
  }, [location.state]);

  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      IdAlojamiento: idAlojamiento,
      RutaArchivo: rutaArchivo,
    };
    // Conexion a la API
    try {
      const response = await fetch(
        id
          ? "http://localhost:3001/imagen/updateImagen/" + id
          : "http://localhost:3001/imagen/createImagen/",
        {
          method: id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(json),
        }
      );
      if (response.ok) {
        alertify.alert("CASA VISTA INN", "Operación realizada con exito!");
        navigate("/imagenes");
      } else {
        alertify.alert("Error!!!", "No se pudo completar laoperacion... =(");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <div className="addimagen-container">
      <h2>{id ? "Editar Imagen" : "Agregar Imagen"}</h2>
      <div className="form-container">
        <form onSubmit={enviar}>
          <label htmlFor="idAlojamiento">Id Alojamiento</label>
          <input
            required
            type="text"
            id="idAlojamiento"
            value={idAlojamiento}
            onChange={(e) => setIdAlojamiento(e.target.value)}
          />
          <label htmlFor="rutaArchivo">Ruta del Archivo</label>
          <input
            required
            type="text"
            id="rutaArchivo"
            value={rutaArchivo}
            onChange={(e) => setRutaArchivo(e.target.value)}
          />

          <button className="btn-add" type="submit">
            {id ? "Guardar cambios" : "Agregar"}
          </button>
        </form>
      </div>
      <Link to="/imagenes">
        <h3>
          <i className="fa-solid fa-left-long back"> Volver a listado</i>
        </h3>
      </Link>
      </div>
    </>
  );
};

export default AddImagenes;