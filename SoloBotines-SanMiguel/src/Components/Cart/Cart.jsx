import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { CardCart } from '../CardCart/CardCart';
import { CartVacio } from './CartVacio/CartVacio';
import { Link } from 'react-router-dom';
import './Cart.css'

export const Cart = () => {
    const {cart,getTotal,clearAll} = useContext(CartContext)
    return cart.length > 0 ? (
        <div className='container-fluid'>
             <h1> SU CARRITO DE COMPRAS</h1>
             <div className='card-container row'>
                {cart.map((carrito,indice)=> {
                     return <CardCart key={indice} cart={carrito}/>
                 })}
             </div>
             <div className='card-container' style={{width: "50%"}}>
                 <div className='card-body'>
                 <h2> PRECIO TOTAL: $ {getTotal()}</h2>
                 <Link to="/checkout">
                 <button className='botonEliminar'> Confirmar Compra</button>
                 </Link>
                 <button className='botonEliminar' onClick={() => clearAll()}>Vaciar Carrito</button>
                 <Link to="/">
                <button className='botonEliminar'> Seguir comprando </button>
                </Link>
                 </div>
             </div>
             </div>
    ):(
        <div> 
            <CartVacio/>
        </div>
        )}       
