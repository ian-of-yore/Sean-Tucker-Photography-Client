import React from 'react';

const ServiceCard = ({ service }) => {
    const { _id, name, img, price, learners, description } = service;
    return (
        <div className='flex justify-center'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" style={{ height: "45vh" }} /></figure>
                <div className="p-2 mt-3 flex justify-between items-center" style={{ height: "55px" }}>
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold text-lg text-yellow-700'>${price}</p>
                </div>
                <div className='p-2 mb-2'>
                    <p><small>{description.split(' ').length > 30 ? description.split(' ').slice(0, 35).join(' ') + '...' : description}</small></p>
                </div>
                <button className="btn btn-xs btn-outline w-full border-0">View Details</button>
            </div>
        </div>
    );
};

export default ServiceCard;