import React from 'react';

import img01 from '../../../../assets/works01.jpg';
import img02 from '../../../../assets/works02.jpg';
import img03 from '../../../../assets/works03.jpg';
import img04 from '../../../../assets/works04.jpeg';
import img05 from '../../../../assets/works05.jpg';
import img06 from '../../../../assets/works06.jpg';
import img07 from '../../../../assets/test.jfif';


const Works = () => {

    return (
        <div style={{ minHeight: "30vh" }}>
            <p className='text-center text-3xl mt-10 mb-5 font-mono'>Some of his best works!</p>
            <div className='grid grid-cols-12 w-10/12 mx-auto gap-4'>
                <div className='col-span-4 '>
                    <img src={img01} className='mb-4' alt="" />
                    <img src={img05} alt="" />
                </div>
                <div className='col-span-4 '>
                    <img src={img03} className='mb-4' alt="" />
                    <img src={img02} alt="" />
                </div>
                <div className='col-span-4'>
                    <img src={img04} className='mb-4' alt="" />
                    <img src={img06} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Works;