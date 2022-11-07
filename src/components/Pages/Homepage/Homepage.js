import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Works from './Works/Works';


const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Works></Works>
        </div>
    );
};

export default Homepage;