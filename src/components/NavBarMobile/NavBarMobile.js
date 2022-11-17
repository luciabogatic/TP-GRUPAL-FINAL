import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import { navButtos } from '../../data/productos';
import './NavBarMobile.css';

export const NavBarMobile = () => {
    return (
        <nav id="mobile_nav" className="navbar navbar-light container-fluid">

            <Link aria-current='page' to={""}>
                <img src={logo} alt="logo_biteme" id="logo_biteme"></img>
            </Link>

            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {navButtos.map(
                                ({text, link}) => (
                                    <li key={text} className = 'nav-item'>
                                    <Link aria-current='page' to={link}>
                                        <button type="button" class="btn btn-light">
                                    {text} 
                                    </button>
                                    </Link>
                                    </li>
                                )
                            )}

                        </ul>
                    </div>
                </div>
                </div>
        </nav>
        
    )
}