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
            <div className='w-10/12 mx-auto flex justify-center text-xl font-serif mb-6'>
                <a href="https://www.seantucker.photography/" target="_blank" rel="noopener noreferrer">Portraits</a>
                <a href='https://www.seantucker.photography/street' target="_blank" rel="noopener noreferrer" className='mx-7'>Streets</a>
                <a href='https://www.seantucker.photography/documentaries' target="_blank" rel="noopener noreferrer" className='mr-7'>Documentaries</a>
                <a href='https://www.seantucker.photography/philosophical' target="_blank" rel="noopener noreferrer">Philosophical</a>
            </div>
            <div className='grid grid-cols-12 w-10/12 mx-auto gap-4'>
                <div className='col-span-4'>
                    <img src={img06} className='mb-4' alt="" style={{ height: "40vh", width: "100%" }} />
                    <img src={street05} alt="" style={{ height: "70vh", width: "100%" }} />
                </div>
                <div className='col-span-4'>
                    <img src={street03} className='mb-4' alt="" style={{ height: "70vh", width: "100%" }} />
                    <img src={fox} alt="" style={{ height: "40vh" }} />
                </div>
                <div className='col-span-4'>
                    <img src={street01} alt="" />
                    <img src={street06} className='my-4' alt="" />
                    <img src={street02} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Works;