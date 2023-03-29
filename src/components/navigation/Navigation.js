import React from 'react';
import './Navigation.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation({ isAuth, toggleAuth }) {

    const navigate = useNavigate();

    function signOut() {
        toggleAuth(false);
        navigate('/')
    }

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
                    {isAuth === true
                        ?
                        <>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                    to="/blogs-overzicht">
                                    Blog Overzicht
                                </NavLink>
                            </li>
                            <li>
                                <button type="button" onClick={signOut}>
                                    Uitloggen
                                </button>
                            </li>
                        </>
                        :
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/login">
                                Login Pagina
                            </NavLink>
                        </li>}
                </ul>
            </div>
        </nav >
    );
}

export default Navigation;