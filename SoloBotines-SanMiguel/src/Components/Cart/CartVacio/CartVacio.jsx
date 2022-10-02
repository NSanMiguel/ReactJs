import React from 'react';
import { Link } from 'react-router-dom';

export const CartVacio = () => {
    return (
        <div>
            <div className='card-container'>
                <h2> El carrito esta vacio</h2>
                <Link to="/">
                <button className='botonEliminar'> Seguir comprando </button>
                </Link>
            </div>
        </div>
    );
}

