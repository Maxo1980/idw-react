
import React, { useState } from "react";
import "./Filtros.css"; 

const Filtros = ({ onFilterChange }) => {
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroDormitorios, setFiltroDormitorios] = useState("");

  const handleChangeEstado = (e) => {
    const estado = e.target.value;
    setFiltroEstado(estado);
    onFilterChange({ estado, dormitorios: filtroDormitorios });
  };

  const handleChangeDormitorios = (e) => {
    const dormitorios = e.target.value;
    setFiltroDormitorios(dormitorios);
    onFilterChange({ estado: filtroEstado, dormitorios });
  };

  const limpiarFiltros = () => {
    setFiltroEstado("");
    setFiltroDormitorios("");
    onFilterChange({ estado: "", dormitorios: "" });
  };

  return (
    
    <div className="filtros">
        <i className="fa-solid fa-magnifying-glass iconobusqueda">    Opciones de Busqueda</i>
      <div className="radios">
        <label>
          <input
            type="radio"
            value="Disponible"
            checked={filtroEstado === "Disponible"}
            onChange={handleChangeEstado}
          />
        Disponibles
        </label>
        <label>
          <input
            type="radio"
            value="Reservado"
            checked={filtroEstado === "Reservado"}
            onChange={handleChangeEstado}
          />
          Reservados
        </label>
      </div>

      <div>
        <label>
          Filtrar por cantidad de dormitorios:
          <input
            className="number"
            type="number"
            min="1"
            value={filtroDormitorios}
            onChange={handleChangeDormitorios}
          />
        </label>
      </div>

      <button onClick={limpiarFiltros}>LIMPIAR FILTROS</button>
    </div>
  );
};

export default Filtros;
