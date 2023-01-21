import React from 'react';

import img06 from '../../../../assets/works06.jpg';
import street01 from '../../../../assets/street01.jpeg';
import street02 from '../../../../assets/street02.jpeg';
import street03 from '../../../../assets/street03.jpg';
import street05 from '../../../../assets/street05.jpeg';
import fox from '../../../../assets/fox.jpeg';
import street06 from '../../../../assets/street06.jpg';

const Works = () => {
    return (
        <div>
            <p className='text-center text-3xl mt-10 font-mono'>Some of Sean's best works!</p>
            <div className='w-11/12 mx-auto lg:w-10/12 lg:mx-auto text-xl font-serif my-6 grid grid-cols-2 md:grid-cols-4 gap-5'>
                <p className='bg-gray-300 text-black text-center py-2'><a href="https://www.seantucker.photography/" target="_blank" rel="noopener noreferrer">Portraits</a></p>
                <p className='bg-gray-300 text-black text-center py-2'><a href='https://www.seantucker.photography/street' target="_blank" rel="noopener noreferrer" >Streets</a></p>
                <p className='bg-gray-300 text-black text-center py-2'><a href='https://www.seantucker.photography/documentaries' target="_blank" rel="noopener noreferrer" >Documentaries</a></p>
                <p className='bg-gray-300 text-black text-center py-2'><a href='https://www.seantucker.photography/philosophical' target="_blank" rel="noopener noreferrer">Philosophical</a></p>
            </div>
            <div className='grid md:grid-cols-12 w-11/12 mx-auto lg:w-10/12 lg:mx-auto gap-4'>
                <div className='col-span-4 xs:px-20 sm:px-28 md:px-0'>
                    <img src={img06} className='mb-4' alt="" style={{ height: "40vh", width: "100%" }} />
                    <img src={street05} alt="" style={{ height: "70vh", width: "100%" }} />
                </div>
                <div className='col-span-4 xs:px-20 sm:px-28 md:px-0'>
                    <img src={street03} className='mb-4' alt="" style={{ height: "70vh", width: "100%" }} />
                    <img src={fox} alt="" style={{ height: "40vh", width: "100%" }} />
                </div>
                <div className='col-span-4 xs:px-20 sm:px-28 md:px-0'>
                    <img src={street01} alt="" style={{ height: "36vh", width: "100%" }} />
                    <img src={street06} className='my-4' alt="" style={{ height: "36vh", width: "100%" }} />
                    <img src={street02} alt="" style={{ height: "36vh", width: "100%" }} />
                </div>
            </div>
        </div>
    );
};

export default Works;