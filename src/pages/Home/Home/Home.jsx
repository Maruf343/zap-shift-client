import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import HowItWorks from '../HowItsWorks/HowItsWorks';
import LogoSlider from '../LogoSlider/LogoSlider';
import Benefits from '../Benefits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <LogoSlider></LogoSlider>
            <Benefits></Benefits>
            <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;