//CARRITO
import React, { useReducer, useState } from "react";
import { ShopEstadoInicial, shopReducer } from "./../Carrito/ShopReducer";
import { TYPE } from "./ShopAcciones";
import ItemProductos from "./ItemProductos";
import ItemCarrito from "./ItemCarrito";
import { BuscadorProductos } from "../NavBar/buscadorProductos";
import { IconoCarrito } from "./IconoCarrito";


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

  const [contador, setContador] = useState(0);

  const agregarCarrito = (id) => {
    dispatch({ type: TYPE.AGREGAR_CARRITO, payload: id });
    setContador(contador + 1);
  };

  const eliminarDelCarrito = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPE.REMOVER_TODO_CARRITO, payload: id });
      // let totalEliminarCarrito = length(carrito.id)
      // setContador(contador - totalEliminarCarrito)
    } else {
      dispatch({ type: TYPE.REMOVER_UNO_CARRITO, payload: id });
      setContador(contador - 1);
    }
  };

  const limpiarCarrito = () => {
    dispatch({ type: TYPE.LIMPIAR_CARRITO });
    setContador(0);
  };

  //FUNCIONES DEL MODAL

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //FUNCION FILTRADO POR CATEGORIAS

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

  //FUNCION FILTRADO POR BUSCADOR
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log("Busqueda: " + e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = Allproducts.filter((elemento) => {
      if (
        elemento.titulo
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProducts(resultadoBusqueda);
  };

  // RENDER

  return (
    <div className="render-Productos">
      <div className="NavProductos">
        <nav class="navbar navbar-dark bg-dark" border="primary">
          <div class="container-fluid ">
            <ButtonList
              categorias={categorias}
              filterCategories={filterCategories}
            />
            <div class="d-flex ">
              <BuscadorProductos
                busqueda={busqueda}
                handleChange={handleChange}
              />
              <IconoCarrito handleShow={handleShow} contador={contador}/>
            </div>
          </div>
        </nav>
      </div>

      <article className="contenedorProductos">
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
  );
};
export default Carrito;
//=============================================================================================================
