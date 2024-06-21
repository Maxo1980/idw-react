import React, { useState, useEffect } from "react";
import "./Add.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Add = () => {
  const location = useLocation();
  const [descripcion, setDescripcion] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      // Cargar datos si vienen del componente Tabla
      setDescripcion(location.state.Descripcion);
      setId(location.state.idTipoAlojamiento);
    }
  }, [location.state]);

  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      Descripcion: descripcion,
    };
    //Conexion a la API
    try {
      const response = await fetch(
        id
          ? "http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/"+ id
          : "http://localhost:3001/tiposAlojamiento/createTipoAlojamiento",
        {
          method: id ? "PUT" : "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(json),
        }
      );
      if (response.ok) {
        alertify.alert("IDW Check-In", "Operación realizada con exito!");
        navigate("/TiposAlojamiento");
      } else {
        alertify.alert("Error!!!", "No se pudo completar laoperacion... =(");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h2>{id ? "Editar tipo de alojamiento" : "Alta tipo alojamiento"}</h2>
      <div className="form-container">
        <form onSubmit={enviar}>
          <label htmlFor="descripcion">Descripción</label>
          <input
            required
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <button className="btn-add" type="submit">
            {id ? "Guardar cambios" : "Agregar"}
          </button>
        </form>
      </div>
      <Link to="/TiposAlojamiento">
        <h3>
          <i class="fa-solid fa-left-long back"> Volver a listado</i>
        </h3>
      </Link>
    </>
  );
};

export default Add;
