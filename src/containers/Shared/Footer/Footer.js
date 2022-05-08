import React from 'react';
import './Footer.css'

const Footer = () => {
    const Year = new Date().getFullYear();
    return (
        <div className='text-center mt-5 bg-info text-white text-5fr p-5 footer'>
            <h4>copyright-protected © {Year}</h4>
        </div>
    );
};

export default Footer;