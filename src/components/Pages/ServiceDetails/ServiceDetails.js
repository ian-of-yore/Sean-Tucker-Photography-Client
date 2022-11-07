import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { name, img, price, description, learners } = serviceDetails;
    console.log(serviceDetails);
    return (
        <div>
            <p className='mt-10 text-3xl text-center font-bold'>{name}</p>
        </div>
    );
};

export default ServiceDetails;