
import {Inicio} from "./Inicio/Inicio"
import { CartWidget } from "./CartWidget/CartWidget";
import {Icono} from "./Icono/Icono"
import './NavBar.css'
import { Dropdown } from "../Spinner/Dropdown/Dropdown";
export function NavBar (){

  return(
    <nav className="navbar navbar-expand-lg navbar-dark nav ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Icono/>
            <ul className="navbar-nav inicio"> 
              <Inicio/>
              <Dropdown/>
              <CartWidget/>
            </ul>
      </div>
    </nav>

  )
}