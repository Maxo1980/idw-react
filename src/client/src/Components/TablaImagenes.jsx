import React, { useEffect, useState } from "react";
import "./TablaServicios.css";
import { useNavigate } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";

const TablaImagenes = () => {
  const [tabla, setTabla] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  // Traer data desde la API
  const URLDATA = "http://localhost:3001/imagen/getAllImagenes/";
  const URLDELETE = "http://localhost:3001/imagen/deleteImagen/";

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
          alertify.error("No de pudo conectar con la DB");
        }
      );
    }
  };

  useEffect(() => {
    showData();
  }, []);

  //BORRAR DATOS

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
      accessorKey: "idImagen",
    },
    {
      header: "Id Alojamiento",
      accessorKey: "IdAlojamiento",
    },
    {
        header: "Ruta de Imagen",
        accessorKey: "RutaArchivo",
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
      <div className="table-container">
        <h4>Asigna Imágen a Alojamiento</h4>
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
                  <div className="icons">
                    <i
                      className="fa-solid fa-pen-to-square editar"
                      title="Editar"
                      onClick={() =>
                        navigate(`/EditServicio/${row.original.idImagen}`, {
                          state: row.original,
                        })
                      }
                    ></i>
                    <i
                      className="fa-solid fa-trash borrar"
                      title="Borrar"
                      onClick={() => borrarDatos(row.original.idImagen)}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="controles">
          <button onClick={() => table.setPageIndex(0)}>Primer Página</button>
          <button onClick={() => table.previousPage()}>Anterior</button>
          <button onClick={() => table.nextPage()}>Siguiente</button>
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            Última Página
          </button>
        </div>
      </div>
    </>
  );
};

export default TablaImagenes;
