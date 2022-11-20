import React,{useState} from "react";
import iconoPrincipal from "./../imagenes/Logos/icono4.jpg";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Allproducts from "../Carrito/productos";
import IniciarSesion from "../Sesion/iniciarSesion";



function Buscador() {
  const [busqueda,setBusqueda] = useState("")

const handleChange = (e) =>{
  setBusqueda(e.target.value);
  filtrar(e.target.value)
  console.log("Busqueda: "+e.target.value)
};



const filtrar =(terminoBusqueda)=>{
  var resultadoBusqueda= Allproducts.filter((elemento)=>{
    if(elemento.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
      return elemento;
    }
  })
}


  return (
    <div>
      <nav class="navbar navbar-dark bg-dark" border="primary">
        
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

          <div className="Navegador">
            
            <nav class="navbar justify-content-center bg-dark" variant="primary ">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                {/* <li class="nav-item">
                  <NavLink className="nav-link" to="/sesion">
                    Registrarse
                  </NavLink>
                </li> */}
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
            <div className="usuario">
            <IniciarSesion></IniciarSesion>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Buscador;
