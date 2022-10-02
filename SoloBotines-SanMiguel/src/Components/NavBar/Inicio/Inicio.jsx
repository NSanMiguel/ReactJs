import React from "react"
import { Link } from "react-router-dom"
import "../NavBar.css"
export function Inicio(){
    return (
        <li className=" nav-item">
            <Link className=" nav-link" to={"/"}> Inicio </Link>
        </li>
    )
}