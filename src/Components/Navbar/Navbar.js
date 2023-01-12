import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div>
            <h2>This is Navbar Area</h2>
            <NavLink to='about' className='navbarlinkstyle' >About</NavLink>
            <NavLink to='contact' className='navbarlinkstyle'>Contact</NavLink>
            <NavLink to='home' className='navbarlinkstyle'>Home</NavLink>
            <NavLink to='header' className='navbarlinkstyle'>Header</NavLink>
            <NavLink to='footer' className='navbarlinkstyle'>Footer</NavLink>
            <NavLink to='order' className='navbarlinkstyle' >Order</NavLink>
        </div>
    );
};

export default Navbar;