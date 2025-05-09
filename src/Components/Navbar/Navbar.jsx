import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Navbar;