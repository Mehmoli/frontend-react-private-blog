import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>Your Blogs</h4>

                <ul className='list-container'>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/login">
                            Login Pagina
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/blogs-overzicht">
                            Blog Overzicht
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default Navigation;