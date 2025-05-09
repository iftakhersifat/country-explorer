import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-10'>
            <div className='flex gpa-4'>
            <div className="dropdown">
           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border border-amber-500">
        <NavLink to="/" className={({isActive})=> isActive ? "text-amber-500 text-lg underline" : "text-lg"}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? "text-amber-500 text-lg underline" : "text-lg"}>About Us</NavLink>
        </ul>
        </div>
        <span className="text-4xl">🌎</span>
            <h1 className="text-3xl font-bold font-poppins text-blue-600">Country Explorer</h1>
            </div>

            {/* link section */}
            <div className='space-x-4 lg:flex hidden'>
            <NavLink to="/" className={({isActive})=> isActive ? "text-amber-500 text-lg underline" : "text-lg"}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? "text-amber-500 text-lg underline" : "text-lg"}>About Us</NavLink>
            </div>
        </div>
    );
};

export default Navbar;