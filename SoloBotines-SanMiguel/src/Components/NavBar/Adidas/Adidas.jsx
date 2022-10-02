import React from "react"
import { Link } from "react-router-dom"

export function Adidas(){
    return (
        <li className=" nav-item">
            <Link className="nav-link"to={"/category/Adidas"}> Adidas </Link>
        </li>
    )
}