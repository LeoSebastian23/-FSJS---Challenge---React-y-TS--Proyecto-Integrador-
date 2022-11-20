//CARRITO

import React, { useReducer, useState } from "react";
import { ShopEstadoInicial, shopReducer } from "./../Carrito/ShopReducer";
import { TYPE } from "./ShopAcciones";
import ItemProductos from "./ItemProductos";
import ItemCarrito from "./ItemCarrito";
import imagenCarrito from "./../imagenes/Logos/iconoCarrito.png";

//MODAL

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ButtonList } from "./ButtonList";
import Allproducts from "./productos";

const Carrito = () => {
  // FUNCIONES DEL CARRITO

  const [state, dispatch] = useReducer(shopReducer, ShopEstadoInicial);

  const { carrito } = state;

  const [products, setProducts] = useState(Allproducts);

  const [contador, setContador] = useState(0)

  const agregarCarrito = (id) => {
    dispatch({ type: TYPE.AGREGAR_CARRITO, payload: id });
      setContador(contador + 1)

  };

  const eliminarDelCarrito = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPE.REMOVER_TODO_CARRITO, payload: id });
      // let totalEliminarCarrito = length(carrito.id)
      // setContador(contador - totalEliminarCarrito)
    } else {
      dispatch({ type: TYPE.REMOVER_UNO_CARRITO, payload: id });
      setContador(contador - 1)
    }
  };

  const limpiarCarrito = () => {
    dispatch({ type: TYPE.LIMPIAR_CARRITO });
    setContador(0)
  };

  //FUNCIONES DEL MODAL

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //FUNCION FILTRADO DE PRODUCTOS

  const allCategories = [
    "All",
    ...new Set(products.map((producto) => producto.categoria)),
  ];

  const [categorias, setCategorias] = useState(allCategories);

  const filterCategories = (categoria) => {
    if (categoria === "All") {
      setProducts(Allproducts);
    } else {
      let productosFiltrados = Allproducts.filter(
        (articulo) => articulo.categoria === categoria
      );
      setProducts(productosFiltrados);
    }
  };

  
  // RENDER

  return (
    <div className="render-Productos">
      <div className="container d-flex justify-content-center align-item-center">
        <article className="row">
          {products &&
            products.map((Productos) => (
              <ItemProductos
                key={Productos.id}
                data={Productos}
                agregarCarrito={agregarCarrito}
                handleShow={handleShow}
              />
            ))}
        </article>
      </div>

      <div className="carrito">
        <div className="NavProductos">
          <div>
            <ButtonList
              categorias={categorias}
              filterCategories={filterCategories}
            />
          </div>

          <div className="contenedorIconoCarrito" class="position-relative">
            <a class="navbar-brand" href="#" onClick={handleShow}>
              <img src={imagenCarrito} alt="" width="60" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {contador}
              </span>
            </a>
          </div>

        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Su compra</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Button variant="warning" onClick={limpiarCarrito}>
              Limpiar Carrito
            </Button>
            {carrito.map((item, index) => (
              <ItemCarrito
                key={index}
                data={item}
                eliminarDelCarrito={eliminarDelCarrito}
              />
            ))}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Comprar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default Carrito;
//=============================================================================================================
