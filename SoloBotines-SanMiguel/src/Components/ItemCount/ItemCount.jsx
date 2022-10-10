import React,{useState} from 'react'
import './ItemCount.css'
import { Link } from "react-router-dom"
export function ItemCount({stock,initial,onAdd}) {
    const [count, setCount] = useState(initial)

    const cantidadBotines = (operar) => {
        if (operar === "+"){
            if(count < stock){
                setCount(count + 1)
            }
        }else{
            if (count > initial){
                setCount(count - 1)
            }
        }
    }

    return(
      <div>
        <div className='card-btn'>
            <p className="stock">
                {count}
            </p>
            <button className="btn btn-outline-danger text-white " onClick={() => cantidadBotines ("+") }> + </button> 
            <button className="btn btn-outline-danger text-white"  onClick={() => cantidadBotines ("-")}> - </button>
        </div>
            <button className='btn btn-danger ' onClick={() => onAdd(count) }> Agregar al Carrito </button>
            <button className=' btn btn-primary'><Link className="nav-link" to="/cart" > Ir al carrito </Link> </button>
        </div>
    )
}