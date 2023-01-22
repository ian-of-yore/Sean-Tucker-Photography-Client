import React, { useEffect, useState } from 'react';
import BannerItems from './BannerItems';
import { Link } from 'react-router-dom'

const Banner = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://sean-tucker-server.vercel.app/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-20'>
            <div className='flex justify-center'>
                {
                    services.length ? '' : <button className="btn loading bg-black">loading</button>
                }
            </div>
            <h1 className='text-2xl md:text-4xl font-mono mb-5 text-center'>Venture through Sean's trending courses</h1>
            {
                services.length && <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 w-11/12 mx-auto lg:w-10/12'>
                    {
                        services.map(service => <BannerItems
                            key={service._id}
                            service={service}
                        ></BannerItems>)
                    }
                </div>
            }
            {
                services.length && <div className='flex justify-center'>
                    <Link to='/services'><button className="btn btn-outline btn-wide bg-slate-300 text-base border-0">See More</button></Link>
                </div>
            }
        </div>
    );
};

export default Banner;