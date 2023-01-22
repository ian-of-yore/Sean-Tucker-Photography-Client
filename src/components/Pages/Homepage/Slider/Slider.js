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
        <div className='w-11/12 lg:w-10/12 mx-auto mb-10 mt-20'>
            <div>
                <h3 className='text-center text-3xl font-serif mb-5'>Explore some genres of photography as you start your own journey!</h3>
            </div>
            <div className="carousel h-[300px] md:h-[500px] lg:h-[700px]">
                <div id="item1" className="carousel-item w-full">
                    <div className="relative hero">
                        <img src={journalism} alt='' className="shadow-2xl w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h3 className="text-xl text-white font-bold text-center">
                                Photo Journalism</h3>
                        </div>
                    </div>
                </div>

                <div id="item2" className="carousel-item w-full">
                    <div className="relative hero">
                        <img src={sports} alt='' className="shadow-2xl w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h3 className="text-xl text-white font-bold text-center">
                                Sports Photography</h3>
                        </div>
                    </div>
                </div>

                <div id="item3" className="carousel-item w-full">
                    <div className="relative hero">
                        <img src={portrait} alt='' className="shadow-2xl w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h3 className="text-xl text-white font-bold text-center">
                                Portrait Photography</h3>
                        </div>
                    </div>
                </div>

                <div id="item4" className="carousel-item w-full">
                    <div className="relative hero">
                        <img src={fashion} alt='' className="shadow-2xl w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h3 className="text-xl text-white font-bold text-center">
                                Fashion Photography</h3>
                        </div>
                    </div>
                </div>

                <div id="item5" className="carousel-item w-full">
                    <div className="relative hero">
                        <img src={architecture} alt='' className="shadow-2xl w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h3 className="text-xl text-white font-bold text-center">
                                Architectural Photography</h3>
                        </div>
                    </div>
                </div>

                <div id="item6" className="carousel-item w-full">
                    <div className="relative hero">
                        <img src={landscape} alt='' className="shadow-2xl w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h3 className="text-xl text-white font-bold text-center">
                                Landscape Photography</h3>
                        </div>
                    </div>
                </div>

                <div id="item7" className="carousel-item w-full">
                    <div className="relative hero">
                        <img src={street} alt='' className="shadow-2xl w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h3 className="text-xl text-white font-bold text-center">
                                Street Photography</h3>
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