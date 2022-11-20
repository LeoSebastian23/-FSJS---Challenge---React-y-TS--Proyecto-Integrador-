import React from 'react'
import ilu1 from './../imagenes/formas/env.webp'
import ilu2 from './../imagenes/formas/metodos.webp'
import {NavLink} from 'react-router-dom';

function Ilustrativas() {
  return (
    <div className='contenedorImagenes'>
        <NavLink className="nav-link" to ='/FAQ'>
            <img src={ilu1} class="img-fluid"  alt="..."/>
        </NavLink>
        <NavLink className="nav-link" to ='/FAQ'>
        <img src={ilu2} class="img-fluid" alt="..."/>
        </NavLink>
    </div>
  );
}

export default Ilustrativas;