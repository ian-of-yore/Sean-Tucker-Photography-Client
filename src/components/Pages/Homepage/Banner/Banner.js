import React, { useEffect, useState } from 'react';
import BannerItems from './BannerItems';
import { Link } from 'react-router-dom'

const Banner = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-10 ml-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                {
                    services.map(service => <BannerItems
                        key={service._id}
                        service={service}
                    ></BannerItems>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/services'><button className="btn btn-outline btn-wide">See More</button></Link>
            </div>
        </div>
    );
};

export default Banner;