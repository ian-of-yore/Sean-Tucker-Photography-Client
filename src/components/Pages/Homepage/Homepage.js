import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Works from './Works/Works';


const Homepage = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Works></Works>
        </div>
    );
};

export default Homepage;