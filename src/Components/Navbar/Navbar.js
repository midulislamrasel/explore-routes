import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div>
            <h2>This is Navbar Area</h2>
            <Link to='about' className='navbarlinkstyle'>About</Link>
            <Link to='contact' className='navbarlinkstyle'>Contact</Link>
            <Link to='home' className='navbarlinkstyle'>Home</Link>
            <Link to='header' className='navbarlinkstyle'>Header</Link>
            <Link to='footer' className='navbarlinkstyle'>Footer</Link>
            <Link to='order' className='navbarlinkstyle'>Order</Link>
        </div>
    );
};

export default Navbar;