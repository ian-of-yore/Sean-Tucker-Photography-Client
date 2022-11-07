import React from 'react';
import { Link } from 'react-router-dom';

const BannerItems = ({ service }) => {
    const { _id, name, img, price, description } = service;

    const lmao = description.split(' ').slice(0, 10).join(' ');
    console.log(lmao)

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
                <Link to={`/services/${_id}`}><button className="btn btn-sm btn-outline w-full border-0">View Details</button></Link>
            </div>
        </div>
    );
};

export default BannerItems;