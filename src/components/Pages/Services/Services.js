import React from 'react';
import ServiceCard from './ServiceCard';
import useTitle from '../../../hooks/useTitle';
import { useState } from 'react';
import { useEffect } from 'react';


const Services = () => {
    useTitle('Services');
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://sean-tucker-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setSpinner(false);
            })
    }, [])

    return (
        <div>
            {
                spinner === true ?
                    <div className='flex justify-center items-center h-screen'><button className="btn loading">loading</button></div>
                    :
                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 w-11/12 mx-auto'>
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Services;