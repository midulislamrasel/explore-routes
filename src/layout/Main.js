import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Order from '../Components/Order/Order';

const Main = () => {
    return (
        <div>
            <Link to='/header'> <Header></Header></Link>
            <Link to='contact' ><Contact></Contact></Link>
            <Link to='order' ><Order></Order></Link>
            <Link to='footer'><Footer></Footer></Link>
        </div>
    );
};

export default Main;