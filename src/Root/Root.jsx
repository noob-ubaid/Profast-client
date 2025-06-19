import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const Root = () => {
    return (
        <div className='font-primary  max-w-[1500px] mx-auto px-4 md:px-0'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;