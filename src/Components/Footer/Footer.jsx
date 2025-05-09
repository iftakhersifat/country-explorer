import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-6 mt-12 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} <span className="font-semibold text-white">Country Explorer</span>. All rights reserved.</p>
            <p>Designed and Developed by <span className="font-semibold text-blue-400">Iftakher Hossen Sifat</span></p>
            </footer>

        </div>
    );
};

export default Footer;