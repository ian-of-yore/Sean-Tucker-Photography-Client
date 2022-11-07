import React, { useEffect, useState } from 'react';
import BannerItems from './BannerItems';

const Banner = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 w-11/12 mx-auto'>
            {
                services.map(service => <BannerItems
                    service={service}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;