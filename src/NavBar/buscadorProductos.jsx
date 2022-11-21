import React from "react";

export const BuscadorProductos = ({busqueda,handleChange}) => {
  
  return (
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Buscar..."
        aria-label="Buscar"
        value={busqueda}
        onChange={handleChange}
      />
      <button class="btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
};
