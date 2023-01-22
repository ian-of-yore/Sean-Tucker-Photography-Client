import React from 'react';
import leica from '../../../../assets/leica.jpg';
import { useReactCountdown } from '../../../../hooks/useCountdown';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';


const LimitedOffer = () => {
    let dateToEndCountdownAt = "February 28, 2023 00:00:00";
    const { days, hours, minutes, seconds } = useReactCountdown(dateToEndCountdownAt);

    const [offerClose, setOfferClose] = useState(false);
    const handleCloseOffer = () => {
        setOfferClose(true);
    }

    // console.log(offerClose)

    return (
        <div className='mb-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-11/12 mx-auto lg:w-10/12'>
            <div className="relative h-full">
                <img src={leica} alt='' className='w-full h-full' />
                <div className={`${offerClose === true ? 'invisible' : 'visible'}`}>
                    <div className="absolute text-base md:text-xl font-mono font-semibold text-white text-center bg-gray-900 top-0 left-0 w-full flex justify-center items-center py-2 px-2">
                        <div>
                            <h4>Get 20% off before the flash sale ends!</h4>
                            <div className="flex gap-2 md:gap-5">
                                <div>
                                    <span className="countdown font-mono text-base md:text-2xl">
                                        <span style={{ "--value": days }}></span>
                                    </span>
                                    days
                                </div>
                                <div>
                                    <span className="countdown font-mono text-base md:text-2xl">
                                        <span style={{ "--value": hours }}></span>
                                    </span>
                                    hours
                                </div>
                                <div>
                                    <span className="countdown font-mono text-base md:text-2xl">
                                        <span style={{ "--value": minutes }}></span>
                                    </span>
                                    min
                                </div>
                                <div>
                                    <span className="countdown font-mono text-base md:text-2xl">
                                        <span style={{ "--value": seconds }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                        </div>
                        <div className='sm:pl-20'>
                            <button onClick={handleCloseOffer} className='btn btn-ghost text-red-600'><AiOutlineClose className='w-4 h-4 md:h-6 md:w-6'></AiOutlineClose></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LimitedOffer;