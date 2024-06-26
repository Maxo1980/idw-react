import "./Admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="admin-menu">
        <Link to="/Alojamientos">
          <h4>ALOJAMIENTOS</h4>
        </Link>
        <Link to="/TiposAlojamiento">
          <h4>TIPOS DE ALOJAMIENTO</h4>
        </Link>
        <Link to="/Servicios">
          <h4>SERVICIOS</h4>
        </Link>
        <Link to="/Imagenes">
          <h4>IMAGENES</h4>
        </Link>
      </div>
    </>
  );
};

export default Admin;
