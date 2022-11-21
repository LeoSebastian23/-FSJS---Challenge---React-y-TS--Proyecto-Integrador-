import React from "react";
import imagenCarrito from "./../imagenes/Logos/iconoCarrito.png";

export const IconoCarrito = ({contador,handleShow}) => {
  
  return (
    <div className="contenedorIconoCarrito" class="position-relative">
      <a class="navbar-brand" href="#" onClick={handleShow}>
        <img src={imagenCarrito} alt="" width="50" />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {contador}
        </span>
      </a>
    </div>
  );
};
