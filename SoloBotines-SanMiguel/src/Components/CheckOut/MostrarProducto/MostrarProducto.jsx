import React,{useContext}from 'react';
import { CartContext } from '../../../Context/CartContext';
export const MostrarProducto = ({cart}) => {
    const {getTotal} = useContext(CartContext)

    return (
        <div>
            <h4> Producto seleccionado: {cart.botin.marca} {cart.botin.modelo}</h4>
            <h4> Cantidad: {cart.botin.cantidad}</h4>
            <h4> Total a pagar: $ {getTotal()}</h4>
        </div>
    );
}


