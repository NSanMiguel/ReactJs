import React from "react"
import { Link } from "react-router-dom"
export function Puma(){
    return (
        <li className=" dropdown-item">
            <Link className=" nav-link" to={"/category/Puma"}> Puma </Link>
        </li>
    )
}