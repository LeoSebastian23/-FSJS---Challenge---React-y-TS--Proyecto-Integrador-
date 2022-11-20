import Allproducts from "./productos";
import { TYPE } from "./ShopAcciones";

export const ShopEstadoInicial = {
  productos: Allproducts,
  carrito: [],
};

export function shopReducer(state, accion) {
  switch (accion.type) {
    case TYPE.AGREGAR_CARRITO: {
      let nuevoItem = state.productos.find(
        (producto) => producto.id === accion.payload
      );
      //console.log(nuevoItem);

      let itemEnCarrito = state.carrito.find(
        (item) => item.id === nuevoItem.id
      );
      return itemEnCarrito
        ? {
            ...state,
            carrito: state.carrito.map((item) =>
              item.id === nuevoItem.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            carrito: [...state.carrito, { ...nuevoItem, cantidad: 1 }],
          };
    }
    case TYPE.REMOVER_UNO_CARRITO: {
        let itemEliminar = state.carrito.find(item => item.id === accion.payload)

        return itemEliminar.cantidad > 1 ? {
            ...state,
            carrito: state.carrito.map((item) => item.id === accion.payload ? {...item,cantidad : item.cantidad -1 } 
            : item),
        } : {
            ...state,
            carrito: state.carrito.filter((item) => item.id !== accion.payload),
        };
    }
    case TYPE.REMOVER_TODO_CARRITO: {
        return{
            ...state,
            carrito: state.carrito.filter((item) => item.id !== accion.payload),
        }
    }
    case TYPE.LIMPIAR_CARRITO: {
        return ShopEstadoInicial;
    }
    case TYPE.FILTRAR_PRODUCTOS:{
      return ShopEstadoInicial;
    }
  
      
      //if(categoria === 'All'){
        //   console.log(productos)
        //   return
        // const filterProductos = productos.filter(articulo => articulo.categoria === categoria);
        //   console.log(filterProductos)
    default:
      return state;
  }
}
