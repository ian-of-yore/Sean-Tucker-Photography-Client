import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Slider from './Slider/Slider';
import Works from './Works/Works';


const Homepage = () => {
    useTitle('Home');
    return (
        <div className='mb-10'>
            <Banner></Banner>
            <Slider></Slider>
            <About></About>
            <Works></Works>
        </div>
    );
};

export default Homepage;