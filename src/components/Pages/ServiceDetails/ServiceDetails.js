import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Review from './Review/Review';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    useTitle('Service Details')
    const { name, img, price, description, learners } = serviceDetails;

    return (
        <div className='mt-10 w-11/12 mx-auto'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" style={{ width: "60vw", height: "70vh" }} /></figure>
                <div className="card-body" style={{ width: "40vw" }}>
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="bg-gray-800 text-white px-5 py-3 rounded-xl hover:bg-gray-900">Join <span className='text-yellow-500'>{learners}</span> Aspiring Photographers today! for <span className='text-orange-600'>${price}</span></button>
                    </div>
                </div>
            </div>
            <Review></Review>
        </div>
    );
};

export default ServiceDetails;