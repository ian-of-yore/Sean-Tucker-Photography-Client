import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review/Review';
import { FaArrowRight } from "react-icons/fa";

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { name, img, price, description, learners } = serviceDetails;
    console.log(serviceDetails);
    return (
        <div className='mt-10 w-11/12 mx-auto'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" style={{ width: "60vw", height: "70vh" }} /></figure>
                <div className="card-body" style={{ width: "40vw" }}>
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="bg-gray-800 text-white p-3 hover:bg-gray-900">Join <span className='text-yellow-500'>{learners}</span> Aspiring Photographers today! for <span className='text-orange-600'>${price}</span></button>
                    </div>
                </div>
            </div>
            <Review></Review>
        </div>
    );
};

export default ServiceDetails;