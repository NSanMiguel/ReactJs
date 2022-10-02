import React from "react"
import { Link } from "react-router-dom"
import './item.css'

export const Item = ({botines}) =>{
    const {marca,modelo,precio,image,id} = botines
    return(
        <div className="card w-25 cards" >
                    <img src={image} className="card-img-top img" alt={marca}></img>
                            <p className="card-text font cardtext">{marca} {modelo}<br/>${precio}</p> 
                            <Link className="nav-link" to={`/detalles/${id}`}>
                            <button className=" button"> Ver Botin</button>
                            </Link>
                        </div>
    )
}