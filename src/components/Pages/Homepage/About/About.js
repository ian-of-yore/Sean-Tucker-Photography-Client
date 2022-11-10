import React from 'react';
import img from '../../../../assets/sean.jfif';

const About = () => {
    return (
        <div className='sm:w-3/4 sm:mx-auto md:w-10/12 md:mx-auto md:grid md:grid-cols-10 shadow-xl my-20'>
            <div className='col-span-2'>
                <img src={img} alt="" style={{ width: "90%", height: "40vh" }} />
            </div>
            <div className='col-span-8 pt-3 sm:p-4'>
                <h3 className='text-3xl font-serif mb-1'>Sean is a Photographer, Filmmaker, Author and Speaker based in the UK.</h3>
                <p className='pr-10 font-sans'>
                    He has a roboust career in his grasp. At a young age he worked with multiple reknowed NGO's across the African Continent
                    to provide sanctuary and care for wild, endengered animals. At some point he devoted himself towards religious works and served
                    as a priest under the catholic church. During this period he discovered his passion and talent for photography. Due to some personal
                    reasons he severed his role with the church, but remained in touch with his fond of photography throughout the years. He has worked in
                    various domains of photography including portrait, commercial product photography, solo filmmaking and most important of all
                    <span className='font-semibold'> street photography.</span> He shares his works on a regular basis on his instragram accout. He has authored a philosophical book for creative
                    minded people titled, <span className='font-semibold'>"The Meaning in the Making"</span>. One of the main things that distinguishes Sean from others is his way of teaching others
                    about the ins & outs of photography. It's never limited to just the technical stuffs rathers it's more about helping others finding their
                    own identity, passion and talents. All this has made his recently opened YouTube channel explode with positive, innovative and creative thinkers.

                </p>
            </div>
        </div>
    );
};

export default About;