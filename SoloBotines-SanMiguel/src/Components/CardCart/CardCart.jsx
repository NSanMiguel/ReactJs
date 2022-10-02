import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import  './CardCart.css'

export const CardCart = ({cart}) => {
    const {removeItem} = useContext(CartContext)
    
    return (
        <>
        <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={cart.botin.image} alt={cart.image} />
                <div className="card-body">
                    <p className="card-text">{cart.botin.marca} {cart.botin.modelo}</p>
                    <p className="card-text">$ {cart.botin.precio}</p>
                    <p className="card-text">Cantidad: {cart.botin.cantidad}</p>
                </div>
                <div >
                <button className='botonEliminar' onClick={() => removeItem(cart.botin.id)}>Eliminar Producto</button>
                
                </div>
        </div>
        </>
    );
}


