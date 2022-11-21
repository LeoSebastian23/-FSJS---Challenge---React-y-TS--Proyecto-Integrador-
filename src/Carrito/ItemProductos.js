import React from 'react'

const ItemProductos = ({data,agregarCarrito,handleShow}) => {
    let{id,img,titulo,precio}=data;

    return (
        <div className="card text-center bg-dark" /*key={id}*/>
            <div className="overFlow">
                <img className="card-img-top" src={img}/>
            </div>
          <div className="card-body text-light">
              <h4 className="card-tittle">{titulo}</h4>
              <p className="card-precio">Precio: ${precio},00</p>
              <button className="btn btn-light border-3" onClick={() => {agregarCarrito(id); handleShow()}}>Agregar al carrito</button>
          </div>
        </div>
      );
}

export default ItemProductos