import React,{useState} from "react";
import iconoPrincipal from "./../imagenes/Logos/icono4.jpg";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import IniciarSesion from "../Sesion/iniciarSesion";
import { IconoCarrito } from "../Carrito/IconoCarrito";


function Buscador() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark" border="primary">
        <div>
          <Navbar.Brand href="#home">
            <img
              alt="Icono"
              src={iconoPrincipal}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            <div className="Titulo">TIENDA AFA</div>
          </Navbar.Brand>
        </div>

          <nav class="navbar" variant="primary ">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/carrito">
                  Productos
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/FAQ">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </nav>

        <div className="usuario">
          <IniciarSesion></IniciarSesion>
        </div>
      </nav>
    </div>
  );
}

export default Buscador;
