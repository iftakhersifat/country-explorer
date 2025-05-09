import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-10'>
            <div className='flex gpa-4'>
                <span className="text-4xl">🌎</span>
                <h1 className="text-3xl font-bold text-blue-600">Country Explorer</h1>
            </div>
            <div className='space-x-4'>
            <NavLink to="/" className={({isActive})=> isActive ? "text-amber-500 text-lg underline" : "text-lg"}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? "text-amber-500 text-lg underline" : "text-lg"}>About Us</NavLink>
            </div>
        </div>
    );
};

export default Navbar;