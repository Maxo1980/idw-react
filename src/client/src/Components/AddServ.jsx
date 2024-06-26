import React, { useState, useEffect } from "react";
import './AddServ.css'
import { Link, useNavigate, useLocation } from "react-router-dom";

const AddServ = () => {
    const location = useLocation();
    const [nombre, setNombre] = useState("");
    const [id, setId] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (location.state) {
        // Cargar datos si vienen del componente Tabla
        setNombre(location.state.Nombre);
        setId(location.state.idServicio);
      }
    }, [location.state]);
  
    const enviar = async (e) => {
      e.preventDefault();
      const json = {
        Nombre: nombre,
      };
      //Conexion a la API
      try {
        const response = await fetch(
          id
            ? "http://localhost:3001/servicio/updateServicio/"+ id
            : "http://localhost:3001/servicio/createServicio",
          {
            method: id ? "PUT" : "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(json),
          }
        );
        if (response.ok) {
          alertify.alert("CASA VISTA INN", "Operación realizada con exito!");
          navigate("/servicios");
        } else {
          alertify.alert("Error!!!", "No se pudo completar laoperacion... =(");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    return (
      <>
        <h2>{id ? "Editar tipo de servicio" : "Alta tipo servicio"}</h2>
        <div className="form-container">
          <form onSubmit={enviar}>
            <label htmlFor="nombre">Nombre</label>
            <input
              required
              type="text"
              id="descripcion"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
  
            <button className="btn-add" type="submit">
              {id ? "Guardar cambios" : "Agregar"}
            </button>
          </form>
        </div>
        <Link to="/Servicios">
          <h3>
            <i class="fa-solid fa-left-long back"> Volver a listado</i>
          </h3>
        </Link>
      </>
    );
  };

export default AddServ
