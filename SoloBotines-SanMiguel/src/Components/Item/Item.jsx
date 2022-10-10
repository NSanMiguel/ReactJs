import React from "react"
import { Link } from "react-router-dom"
import './item.css'

export const Item = ({botines}) =>{
    const {marca,modelo,precio,image,id} = botines
    return(
        <div className="card w-25 cards" >
                    <Link className="nav-link" to={`/detalles/${id}`}><img src={image} className="card-img-top img" alt={marca}></img>  </Link>
                            <p className="card-text font cardtext">{marca} {modelo}<br/>${precio}</p> 
                        </div>
    )
}