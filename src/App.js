import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Buscador from './NavBar/Buscador';

import Carrousel from './secciones/Carrousel'
import Ilustrativas from './secciones/ilustrativas';
import Envios from './FAQ/envios';
import Carrito from './Carrito/Carrito';
import FormularioRegistro from './Sesion/registrar';
import Footer from './Footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
            <>
              <Buscador/>
              <Carrousel></Carrousel>
              <Ilustrativas/>
              <Footer></Footer>
            </>
          }
        />  
        <Route path='/carrito' element={
            <>
              <Buscador/>
              <Carrito></Carrito>
            </>
          }
        >
        </Route>
        <Route path='/FAQ' element={
            <>
              <Buscador/>
              <Envios></Envios>
            </>
          }
        />  
      
      <Route path='/sesion' element={
            <>
              <Buscador/>
              <FormularioRegistro/>
            </>
          }
      />
      </Routes> 
    </BrowserRouter>
  
  );
}

export default App;