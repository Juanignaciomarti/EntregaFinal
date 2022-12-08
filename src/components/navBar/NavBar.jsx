import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return <div className='container'>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <Link className="navbar-brand fs-2 text-primary" to={'/'}>Free-Market</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4" activeclassname='page' to={'/category/AURICULAR'}>Auriculares</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link fs-4" activeclassname='page' to={'/category/TECLADO'}>Teclados</NavLink>  
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link fs-4" activeclassname='page' to={'/category/MOUSE'}>Mouse</NavLink>                            
                        </li>
                    </ul>
                </div>
                <div className='m-2'>
                    <CartWidget />
                </div>

            </div>

        </nav>
    </div>
}


export default NavBar;