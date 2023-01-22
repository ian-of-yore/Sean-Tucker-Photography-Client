import React from 'react';
import leica from '../../../../assets/leica.jpg';
import video from '../../../../assets/video.mkv';
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
    // h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-11/12 mx-auto lg:w-10/12

    return (
        <div className='my-10'>
            <div className="hero w-11/12 mx-auto lg:w-10/12 border-b-4 lg:border-b-0 pb-4 lg:pb-0">
                <div className="hero-content flex-col lg:flex-row w-full p-0">
                    <div className=''>
                        <video src={video} autoPlay muted loop></video>
                    </div>
                    <div className=''>
                        <h4 className='text-base md:text-xl font-mono mb-3'>Get 20% off before the flash sale ends!</h4>
                        <div className="flex gap-2 md:gap-5">
                            <div>
                                <span className="countdown font-mono text-xl md:text-4xl">
                                    <span style={{ "--value": days }}></span>
                                </span>
                                days
                            </div>
                            <div>
                                <span className="countdown font-mono text-xl md:text-4xl">
                                    <span style={{ "--value": hours }}></span>
                                </span>
                                hours
                            </div>
                            <div>
                                <span className="countdown font-mono text-xl md:text-4xl">
                                    <span style={{ "--value": minutes }}></span>
                                </span>
                                min
                            </div>
                            <div>
                                <span className="countdown font-mono text-xl md:text-4xl">
                                    <span style={{ "--value": seconds }}></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LimitedOffer;