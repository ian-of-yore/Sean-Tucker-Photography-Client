import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const StaticReviews = () => {
    const [staticReviews, setStaticReviews] = useState([]);

    useEffect(() => {
        fetch('https://sean-tucker-server.vercel.app/staticReviews')
            .then(res => res.json())
            .then(data => setStaticReviews(data))
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 2999, min: 1200 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1199, min: 820 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 819, min: 0 },
            items: 1
        }
    };

    // console.log(staticReviews)

    return (
        <div className='w-11/12 mx-auto lg:w-10/12 lg:mx-auto my-20'>
            <div className='flex justify-center'>
                {
                    staticReviews.length ? '' : <button className="btn loading bg-black">loading</button>
                }
            </div>
            <h1 className='text-2xl md:text-4xl font-sans font-semibold mb-5 text-center'>Check out what some of Sean's learners have to say!</h1>
            {
                staticReviews.length && <div className='xs:px-10 sm:px-20 md:px-0'>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        swipeable={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        showDots={true}
                        // renderDotsOutside={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        className='pb-20'
                    >
                        {
                            staticReviews.map(reviews =>
                                <div key={reviews._id} className="card h-72  shadow-xl mx-4 border-t-4 border-indigo-500 top-10">
                                    <div className="avatar flex-col justify-center items-center -top-10">
                                        <div className="w-20 rounded-full">
                                            <img src={reviews.img} alt='' />
                                        </div>
                                        <h2 className="text-xl font-semibold text-center">{reviews.name}</h2>
                                        <h3 className='text-lg font-mono font-semibold'>{reviews.title}</h3>
                                        <div className='pl-5 mt-4'>
                                            <p className='overflow-scroll overflow-x-clip h-40 text-justify pr-3 font-serif'>{reviews.description}</p>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </Carousel>
                </div>
            }
        </div>
    );
};

export default StaticReviews;