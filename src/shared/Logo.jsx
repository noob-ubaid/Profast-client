import React from 'react';
import logo from '../assets/logo.png';
const Logo = ({isWhite}) => {
    return (
        <div className='flex items-end ml-2 md:ml-0'>
            <img className='mb-2' src={logo} alt="" />
            <p className={`text-3xl font-bold -ml-4 ${isWhite ? "text-white" : "text-black"}`}>ProFast</p>
        </div>
    );
};

export default Logo;