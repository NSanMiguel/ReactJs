import React from 'react';
import { Nike } from '../../Nike/Nike';
import { Adidas } from '../../NavBar/Adidas/Adidas';
import { Puma } from '../../Puma/Puma';


export const Dropdown = () => {
    return (
    <li className="nav-item dropdown drpdown ">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
        </a>
        <ul className='dropdown-menu'>
            <Adidas/>
            <Nike/>
            <Puma/>
        </ul>
    </li>
    );
}

