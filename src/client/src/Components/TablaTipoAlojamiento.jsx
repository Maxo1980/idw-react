import React, { useEffect, useState } from "react";
import "./TablaTipoAlojamiento.css";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

const Tabla = () => {
  const [tabla, setTabla] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState("");

  // Traer data desde la API
  const URLDATA = "http://localhost:3001/tiposAlojamiento/getTiposAlojamiento";
  const URLDELETE =
    "http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/";

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
      accessorKey: "idTipoAlojamiento",
    },
    {
      header: "Descripción",
      accessorKey: "Descripcion",
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
                      { asc: "⬆️", desc: "⬇️" }[
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
                    <i className="fa-solid fa-pen-to-square" title="Editar"></i>
                    <i
                      className="fa-solid fa-trash"
                      title="Borrar"
                      onClick={() =>
                        borrarDatos(row.original.idTipoAlojamiento)
                      }
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

export default Tabla;
