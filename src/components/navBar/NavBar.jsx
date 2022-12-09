import React from 'react';
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return <div className='container'>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <Link className="navbar-brand fs-2" to={'/'}>The Wine Cellar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4" activeclassname='page' to={'/category/Blends'}>Blends</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link fs-4" activeclassname='page' to={'/category/Malbec'}>Malbec</NavLink>  
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link fs-4" activeclassname='page' to={'/category/Pinot'}>Pinot Noir</NavLink>                            
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