import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <NavLink to="/" className={({isActive})=> isActive ? "text-amber-500 underline" : ""}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? "text-amber-500 underline" : ""}>About Us</NavLink>
        </div>
    );
};

export default Navbar;