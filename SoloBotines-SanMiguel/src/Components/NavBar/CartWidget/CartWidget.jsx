import React,{useContext} from 'react'
import {FaOpencart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContext'
import './CartWidget.css'
export function CartWidget(){
    const {cart,getCantidad} = useContext(CartContext)

    return cart.length > 0 ? 
        <Link to={"/cart"}>
            <div className="cart" id="navbarColor01">
                <FaOpencart className='icon'/>
                <span className='cantidad'>{getCantidad()}</span>
                
            </div>
        </Link>
        :
        <></>
}