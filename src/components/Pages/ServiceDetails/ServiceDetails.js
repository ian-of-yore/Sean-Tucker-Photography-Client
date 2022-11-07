import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review/Review';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { name, img, price, description, learners } = serviceDetails;
    console.log(serviceDetails);
    return (
        <div>
            <div>
                <p className='mt-10 text-3xl text-center font-bold'>{name}</p>
            </div>
            <Review></Review>
        </div>
    );
};

export default ServiceDetails;