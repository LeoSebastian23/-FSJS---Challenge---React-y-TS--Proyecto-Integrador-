import React from "react";
import Accordion from "react-bootstrap/Accordion";
import MedioDePagos from "./../imagenes/formas/MedioPagos.png";
function Envios() {
  return (
    <div>
      <div className="contenedorFAQ">
        <div class="card">
          <h5 class="card-header">Envios</h5>
          <div class="card-body">
            <h5 class="card-title">
              ¿Cual es el monto minimo para solicitar en envio gratis?
            </h5>
            <p class="card-text">
              La compra minima es $14.999 (pesos argentinos) con los medios de
              pagos permitidos.
            </p>
          </div>
        </div>
        <div class="card">
          <h5 class="card-header">Envios</h5>
          <div class="card-body">
            <h5 class="card-title">¿Envios gratis a todo el pais?</h5>
            <p class="card-text">
              El envio es gratis a cualquier parte del paism siempre y cuando el
              departamento de correo lo permita.
            </p>
          </div>
        </div>
        <div class="card">
          <h5 class="card-header">Envios</h5>
          <div class="card-body">
            <h5 class="card-title">Metodo de envio</h5>
            <p class="card-text">
              El servicio de correo Andreani realizará dos visitas iniciales a
              tu domicilio. En caso de que no se haya podido efectuar la
              entrega, Andreani relizará un llamado al número de teléfono
              registrado en tu compra para coordinar una tercer y última visita.
            </p>
          </div>
        </div>
      </div>
      <div className="contenedorMP">
        <div class="card">
          <h5 class="card-header">Medios de pagos</h5>
          <div class="card-body">
            <div>
              <img src={MedioDePagos} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Envios;
