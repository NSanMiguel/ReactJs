import { Adidas } from "./Adidas/Adidas";
import {Inicio} from "./Inicio/Inicio"
import { CartWidget } from "./CartWidget/CartWidget";
import {Icono} from "./Icono/Icono"
import { Nike } from "../Nike/Nike";
import { Puma } from "../Puma/Puma";
import './NavBar.css'
export function NavBar (){

  return(
    <nav className="navbar navbar-expand-lg navbar-dark ">
            <Icono/>
            <ul className="navbar-nav me-auto"> 
              <div className="navbar-nav">
              <Inicio/>
              <Adidas/>
              <Nike/>
              <Puma/>
              </div>
            </ul>
            <CartWidget/>
          </nav>

  )
}