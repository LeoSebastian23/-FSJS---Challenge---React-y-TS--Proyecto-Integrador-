import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormularioInicioSesion from "./formularioInicio";
import imgUsuario from "./../imagenes/Logos/iconoRegistro.png";
import { NavLink } from "react-router-dom";

function IniciarSesion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <a class="navbar-brand" href="#" onClick={handleShow}>
          <img src={imgUsuario} alt="" width="40" /*height="24"*/ />
        </a>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormularioInicioSesion />
        </Modal.Body>

        <Modal.Footer>
          <div className="sesionFooter">
            <div className="btn-Registrar">
              No tienes usuario?
            </div>
            <div className="btn-Iniciar">
            <NavLink className="nav-link" to="/sesion" onClick={handleClose}>
                    <a>Registrate aqui!</a>
            </NavLink>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IniciarSesion;
