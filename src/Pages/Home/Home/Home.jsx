import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from '../Marquee/ClientLogos';
import BeMerchant from '../BeMerchant/BeMerchant';
import CustomerFeedbackSection from '../Feedback/CustomerFeedBack';
import TestimonialSection from '../Testimonial/Testimonial';
import FAQSection from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ClientLogos/>
            <BeMerchant/>
            <CustomerFeedbackSection/>
            <TestimonialSection/>
            <FAQSection/>
        </div>
    );
};

export default Home;