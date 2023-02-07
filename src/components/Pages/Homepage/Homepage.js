import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import LimitedOffer from './LimitedOffer/LimitedOffer';
import Pricing from './Pricing/Pricing';
import Slider from './Slider/Slider';
import StaticReviews from './StaticReviews/StaticReviews';
import Subscribe from './Subscribe/Subscribe';
import Works from './Works/Works';


const Homepage = () => {
    useTitle('Home');
    return (
        <div className='mb-10'>
            <LimitedOffer></LimitedOffer>
            <About></About>
            <Works></Works>
            <Slider></Slider>
            <Banner></Banner>
            <StaticReviews></StaticReviews>
            <Pricing></Pricing>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Homepage;