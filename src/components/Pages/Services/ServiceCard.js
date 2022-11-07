import React from 'react';

const ServiceCard = ({ service }) => {
    const { _id, name, img, price, learners, description } = service;
    return (
        <div className='flex justify-center'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className='w-full' style={{ height: "45vh" }} /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div>
                        <p className='font-bold text-lg text-yellow-700'>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;