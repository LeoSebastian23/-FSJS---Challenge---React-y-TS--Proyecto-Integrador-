import React from "react";
import Button from "react-bootstrap/Button";

const ItemCarrito = ({ data, eliminarDelCarrito }) => {
  let { id, img, titulo, precio, cantidad,articulo } = data;
  return (
    <div className="containerCarrito">
      <div className="productoCarrito" key={articulo}>
        <div className="containerImgCarrito">
          <img className="imgCarrito" src={img} />
        </div>
        <div className="containerTexto">
          <h7 className="tituloCarrito">{titulo}</h7>
          <h6 className="tituloCarrito">
            {precio} x {cantidad} = ${precio * cantidad},00
          </h6>
        </div>
        <div className="boton">
          <Button variant="secondary" onClick={() => eliminarDelCarrito(id)}>
            Eliminar UNO
          </Button>

          <Button variant="danger" onClick={() => eliminarDelCarrito(id, true)}>
            Eliminar TODOS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrito;
