import React, { useEffect, useState } from "react";
import "./TablaAlojamientos.css";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import ModalImagen from "./ModalImagen";
import alertify from "alertifyjs";

const TablaAlojamientos = () => {
  const [tabla, setTabla] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedAlojamientoId, setSelectedAlojamientoId] = useState(null);
  const [imagenes, setInagenes] = useState([]);

  // Traer data desde la API
  const URLDATA = "http://localhost:3001/alojamiento/getAlojamientos";
  const URLDELETE = "http://localhost:3001/alojamiento/deleteAlojamiento/";
  const URLIMAGENES = "http://localhost:3001/imagen/getAllImagenes";

  //Mostrar imagenes
  const showImages = async () => {
    try {
      const response = await fetch(URLIMAGENES);
      const data = await response.json();
      setInagenes(data);
    } catch (error) {
      alertify.alert("Error!!", "No se pudo conectar con la BD de Imagenes");
    }
  };

  // Mostrar datos de la BD
  const showData = async () => {
    try {
      const response = await fetch(URLDATA);
      const data = await response.json();
      setTabla(data);
    } catch (error) {
      alertify.alert(
        "Error!",
        "No se pudo conectar con la base de datos!",
        function () {
          alertify.error("No se pudo conectar con la DB");
        }
      );
    }
  };



  useEffect(() => {
    showData();
    showImages();
  }, []);

  // Función para abrir el modal
  const abrirModal = (idAlojamiento) => {
    setSelectedAlojamientoId(idAlojamiento);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setSelectedAlojamientoId(null);
    setShowModal(false);
  };

  // BORRAR DATOS
  const borrarDatos = async (dato) => {
    alertify.confirm(
      "Se borrará el registro Nro: " + dato,
      "Esta operación no se puede deshacer. ¿Desea continuar?",
      async function () {
        await fetch(URLDELETE + dato, {
          method: "DELETE",
        });
        showData();
      },
      function () {
        alertify.error("Operación cancelada!");
      }
    );
  };

  // Configuración de la tabla
  const columns = [
    {
      header: "Registro #",
      accessorKey: "idAlojamiento",
    },
    {
      header: "Titulo",
      accessorKey: "Titulo",
    },
    {
      header: "Descripción",
      accessorKey: "Descripcion",
    },
    {
      header: "Tipo de Alojamiento",
      accessorKey: "TipoAlojamiento",
    },
    {
      header: "Latitud",
      accessorKey: "Latitud",
    },
    {
      header: "Longitud",
      accessorKey: "Longitud",
    },
    {
      header: "Precio por día",
      accessorKey: "PrecioPorDia",
    },
    {
      header: "Cantidad dormitorios",
      accessorKey: "CantidadDormitorios",
    },
    {
      header: "Cantidad Baños",
      accessorKey: "CantidadBanios",
    },
    {
      header: "Estado",
      accessorKey: "Estado",
    },
  ];

  const table = useReactTable({
    data: tabla,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilter,
  });

  return (
    <>
      <div className="table-container-alojamientos">
        <h4 className="titulo-aloj">Alta y baja de alojamientos</h4>
        <div className="find">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      { asc: " ⬆️", desc: " ⬇️" }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                ))}

                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                 <td>
                 {imagenes
                    .filter((img) => img.idAlojamiento === row.original.idAlojamiento)
                    .map((img) => (
                      <img
                        key={img.id}
                        src={img.RutaArchivo}
                        alt="Alojamiento"
                        className="imagen-alojamiento"
                        width="60px"
                      />
                    ))}
                </td>
                <td>
                  <div className="icons">
                    <Link to={`/editAlojamiento/${row.original.idAlojamiento}`}>
                      <i
                        className="fa-solid fa-pen-to-square editar"
                        title="Editar"
                      ></i>
                    </Link>
                    <i
                      className="fa-solid fa-trash borrar"
                      title="Borrar"
                      onClick={() => borrarDatos(row.original.idAlojamiento)}
                    ></i>

                    <i
                      className="fa-regular fa-image"
                      title="Agregar imagen"
                      onClick={() => abrirModal(row.original.idAlojamiento)}
                    ></i>
                  </div>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
        <div className="controles">
          <button className="btn-aloja" onClick={() => table.setPageIndex(0)}>
            Primer Página
          </button>
          <button className="btn-aloja" onClick={() => table.previousPage()}>
            Anterior
          </button>
          <button className="btn-aloja" onClick={() => table.nextPage()}>
            Siguiente
          </button>
          <button
            className="btn-aloja"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            Última Página
          </button>
        </div>
      </div>

      {/* Renderizado del Modal */}
      <ModalImagen
        isOpen={showModal}
        onClose={cerrarModal}
        alojamientoId={selectedAlojamientoId}
      />
    </>
  );
};

export default TablaAlojamientos;
