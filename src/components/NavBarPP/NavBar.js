//si pongo rafc me crea el componente solo
import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';

import { navButtos } from '../../data/productos';
import './navBar.css';

export const NavBar = () => {
    return (
        
        <nav className="menu"> 
        <img  src={logo} alt="logo_biteme" width="200"></img>
                
        <div className="menuButton">
          <ul>
            {navButtos.map(
            ({text, link}) => (
            <li key={text} className = 'nav-item'>
               <Link aria-current='page' to={link}>
                <button type="button" class="btn btn-light">
               {text} 
               </button>
              </Link>
            </li>)

            )}
          
          </ul>
        </div>
      </nav>
        
    )
}
