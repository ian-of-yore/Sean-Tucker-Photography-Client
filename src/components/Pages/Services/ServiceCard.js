import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, name, img, price, description } = service;
    return (
        <div className='flex justify-center'>
            <div className="card card-compact w-full bg-slate-200 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <div>
                            <img src={img} style={{ height: "45vh", width: "100%" }} alt="" />
                        </div>
                    </PhotoView>
                </PhotoProvider>
                <div className="p-2 mt-3 flex justify-between items-center" style={{ height: "55px" }}>
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold text-lg text-yellow-700'>${price}</p>
                </div>
                <div className='p-2 mb-2'>
                    <p><small>{description.split(' ').length > 30 ? description.split(' ').slice(0, 35).join(' ') + '...' : description}</small></p>
                </div>
                <Link to={`/services/${_id}`}><button className="btn btn-outline w-full border-0 bg-slate-300 rounded-none">View Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;