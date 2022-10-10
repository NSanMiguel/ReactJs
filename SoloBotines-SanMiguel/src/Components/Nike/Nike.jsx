import React from "react"
import { Link } from "react-router-dom"
export function Nike(){
    return (
        <li className=" dropdown-item">
            <Link className=" nav-link" to={"/category/Nike"}> Nike </Link>
        </li>
    )
}