import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return (
    

        <nav >
            <div className='header'>
                <Link to={'/'}><img src={"https://cdn-icons-png.flaticon.com/512/1178/1178912.png"} alt="logo" width={90}></img></Link>
                <h1>The Wine store</h1>
                <div className='div-lista-header'>
                    <ul className='lista-header'>
                        <li >
                            <NavLink className="navlink" activeclassname='page' to={'/category/BLENDS'}>Blends</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeclassname='page' to={'/category/MALBEC'}>Malbec</NavLink>
                        </li>
                        <li >
                            <NavLink className="navlink" activeclassname='page' to={'/category/PINOT'}>Pinot</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='carrito'>
                    <CartWidget />
                </div>

            </div>

        </nav>
   
)}


export default NavBar;