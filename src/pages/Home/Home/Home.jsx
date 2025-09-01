import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import HowItWorks from '../HowItsWorks/HowItsWorks';
import LogoSlider from '../LogoSlider/LogoSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <LogoSlider></LogoSlider>
        </div>
    );
};

export default Home;