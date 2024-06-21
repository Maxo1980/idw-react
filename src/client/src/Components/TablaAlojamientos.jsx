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

const TablaAlojamientos = () => {
  const [tabla, setTabla] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState("");

  // Traer data desde la API
  const URLDATA = "http://localhost:3001/alojamiento/getAlojamientos";
  const URLDELETE = "http://localhost:3001/alojamiento/deleteAlojamiento/";

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
        <h4>Tipos de Alojamiento</h4>
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
                    <Link to={`/editAlojamiento/${row.original.idAlojamiento}`} >
                    <i className="fa-solid fa-pen-to-square editar" title="Editar"></i>
                    </Link>
                    <i
                      className="fa-solid fa-trash borrar"
                      title="Borrar"
                      onClick={() => borrarDatos(row.original.idAlojamiento)}
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

export default TablaAlojamientos;
