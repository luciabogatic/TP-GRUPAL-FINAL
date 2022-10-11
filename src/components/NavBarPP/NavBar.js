//si pongo rafc me crea el componente solo
import React from 'react';
import './navBar.css';

export const NavBar = () => {
    return (
        
        <nav className="menu">
        <img src="./assets/img/logo_biteme.png" alt="logo_biteme" width="200"></img>
                
        <div className="menuButton">
          <ul>
            <li><a href="#"><button type="button" class="btn btn-light">Inicio</button></a></li>
            <li><a href="#"><button type="button" class="btn btn-light">Sobre Nosotros</button></a></li>
            <li><a href="#"><button type="button" class="btn btn-light">Productos</button></a></li>
          </ul>
        </div>
      </nav>
        
    )
}
