import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from '../Marquee/ClientLogos';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ClientLogos/>
            <BeMerchant/>
        </div>
    );
};

export default Home;