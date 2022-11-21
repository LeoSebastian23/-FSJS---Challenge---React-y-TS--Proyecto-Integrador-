import React from "react";
import iconoPrincipal from "./../imagenes/Logos/icono4.jpg";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import IniciarSesion from "../Sesion/iniciarSesion";

function Buscador() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" border="primary">
        <div class="container-fluid">
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

          <div className="navegador">
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
          </div>

          <div className="usuario">
            <IniciarSesion></IniciarSesion>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Buscador;
