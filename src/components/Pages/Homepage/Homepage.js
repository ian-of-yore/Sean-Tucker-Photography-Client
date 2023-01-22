import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import LimitedOffer from './LimitedOffer/LimitedOffer';
import Slider from './Slider/Slider';
import StaticReviews from './StaticReviews/StaticReviews';
import Subscribe from './Subscribe/Subscribe';
import Works from './Works/Works';


const Homepage = () => {
    useTitle('Home');
    return (
        <div className='mb-10'>
            <LimitedOffer></LimitedOffer>
            <Slider></Slider>
            <About></About>
            <Works></Works>
            <Banner></Banner>
            <StaticReviews></StaticReviews>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Homepage;