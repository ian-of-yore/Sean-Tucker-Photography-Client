import React from 'react';

import portrait from '../../../../assets/types/portrait02.jpg';
import street from '../../../../assets/types/anotherStreet.jfif';
import journalism from '../../../../assets/types/Photojournalism.jpg';
import fashion from '../../../../assets/types/finalFashion.jfif';
import sports from '../../../../assets/types/Sports Photography.jpg';
import architecture from '../../../../assets/types/finalArchitechtural.jfif';
import landscape from '../../../../assets/types/landscape.jpg';




const Slider = () => {
    return (
        <div className='w-9/12 mx-auto my-10'>
            <div>
                <h3 className='text-center text-3xl font-serif mb-5'>Explore some genres of photography as you start your own journey!</h3>
            </div>
            <div className="carousel">
                <div id="item1" className="carousel-item w-full">
                    <div className='hero'>
                        <img src={journalism} alt='' className="shadow-2xl" style={{ height: "85vh", width: "85vw" }} />
                        <div className='flex justify-center items-end h-full hero-overlay bg-opacity-20'>
                            <h1 className="text-5xl font-mono text-center text-white pb-12">Photo Journalism</h1>
                        </div>
                    </div>
                </div>

                <div id="item2" className="carousel-item w-full">
                    <div className='hero'>
                        <img src={sports} alt='' className="shadow-2xl" style={{ height: "85vh", width: "85vw" }} />
                        <div className='flex justify-center items-end h-full hero-overlay bg-opacity-60'>
                            <h1 className="text-5xl font-mono text-center text-white pb-12">Sports Photography</h1>
                        </div>
                    </div>
                </div>

                <div id="item3" className="carousel-item w-full">
                    <div className='hero'>
                        <img src={portrait} alt='' className="shadow-2xl" style={{ height: "85vh", width: "85vw" }} />
                        <div className='flex justify-center items-end h-full hero-overlay bg-opacity-40'>
                            <h1 className="text-5xl font-mono text-center text-white pb-12">Portrait Photography</h1>
                        </div>
                    </div>
                </div>

                <div id="item4" className="carousel-item w-full">
                    <div className='hero'>
                        <img src={fashion} alt='' className="shadow-2xl" style={{ height: "85vh", width: "85vw" }} />
                        <div className='flex justify-center items-end h-full hero-overlay bg-opacity-40'>
                            <h1 className="text-5xl font-mono text-center text-white pb-12">Fashion Photography</h1>
                        </div>
                    </div>
                </div>

                <div id="item5" className="carousel-item w-full">
                    <div className='hero'>
                        <img src={architecture} alt='' className="rounded-lg shadow-2xl" style={{ height: "85vh", width: "85vw" }} />
                        <div className='flex justify-center items-end h-full hero-overlay bg-opacity-20'>
                            <h1 className="text-5xl font-mono text-center text-white pb-12">Architectural Photography</h1>
                        </div>
                    </div>
                </div>

                <div id="item6" className="carousel-item w-full">
                    <div className='hero'>
                        <img src={landscape} alt='' className="rounded-lg shadow-2xl" style={{ height: "85vh", width: "85vw" }} />
                        <div className='flex justify-center items-end h-full hero-overlay bg-opacity-50'>
                            <h1 className="text-5xl font-mono text-center text-white pb-12">Landscape Photography</h1>
                        </div>
                    </div>
                </div>

                <div id="item7" className="carousel-item w-full">
                    <div className='hero'>
                        <img src={street} alt='' className="rounded-lg shadow-2xl" style={{ height: "85vh", width: "85vw" }} />
                        <div className='flex justify-center items-end h-full hero-overlay bg-opacity-20'>
                            <h1 className="text-5xl font-mono text-center text-gray-100 pb-12">Street Photography</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
                <a href="#item7" className="btn btn-xs">7</a>
            </div>
        </div>
    );
};

export default Slider;