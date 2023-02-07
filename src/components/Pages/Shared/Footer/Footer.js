import React from 'react';
import { SlSocialTwitter, SlSocialYoutube, SlSocialInstagram } from "react-icons/sl";
import masterCard from '../../../../assets/masterCard.png';
import visa from '../../../../assets/visa.png';
import applePay from '../../../../assets/applePay.png';
import payPal from '../../../../assets/paypal.png';
import logo from '../../../../assets/logo.jpg';
import { CiLocationOn } from "react-icons/ci";


const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12'>
            <div className='md:col-span-4 xl:col-span-5 bg-gray-900 text-white border-b-4 md:border-r-4 border-gray-800'>
                <div className='mt-10 mb-5 md:mb-0 ml-7 sm:ml-20 md:ml-0 xl:ml-20'>
                    <div className='flex justify-start md:ml-6'>
                        <div className='lg:flex justify-center items-end lg:mx-0'>
                            <img src={logo} alt="" className='w-14 h-14 rounded-lg mr-2' />
                            <div>
                                <h3 className='text-xl font-serif'>Sean Tucker Photography</h3>
                                <div className='flex justify-start items-center'>
                                    <CiLocationOn className='font-bold h-5 w-4 mr-1 pt-1'></CiLocationOn>
                                    <p>17, Irving PI, East London</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 flex justify-start md:ml-6'>
                        <div>
                            <p>info@seantuckerphotography.com</p>
                            <p>Call Us: +2477856829</p>
                        </div>
                    </div>
                    <div className='mt-5 md:mt-10 lg:mt-16 flex justify-start md:ml-6'>
                        <p>Copyright 2023 <strong>Sean Tucker Photography</strong></p>
                    </div>
                </div>
            </div>
            <div className='p-10 bg-gray-900 text-white md:col-span-8 xl:col-span-7'>
                <footer className="footer flex justify-around">
                    <div>
                        <span className="text-lg font-semibold text-white">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="text-lg font-semibold text-white">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="text-lg font-semibold text-white">Socials</span>
                        <div className="grid grid-flow-col gap-4 items-center">
                            <a href="https://twitter.com/seantuck?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer"><SlSocialTwitter className='h-7 w-7'></SlSocialTwitter></a>
                            <a href="https://www.youtube.com/channel/UC_43mQmHwHPTBBqImFrWU3Q" target="_blank" rel="noopener noreferrer"><SlSocialYoutube className='h-7 w-7'></SlSocialYoutube></a>
                            <a href="https://www.instagram.com/seantuck/?hl=en" target="_blank" rel="noopener noreferrer"><SlSocialInstagram className='h-6 w-6'></SlSocialInstagram></a>
                        </div>
                    </div>
                </footer>
                <div className='flex justify-center items-center mt-12'>
                    <h3 className='text-base sm:text-xl font-serif mr-3'>Secure Payments</h3>
                    <div className='flex justify-center items-center'>
                        <img src={visa} alt="" className='w-10 h-6 sm:w-20 sm:h-12 shadow-xl mr-2 rounded-lg' />
                        <img src={masterCard} alt="" className=' w-10 h-6 sm:w-20 sm:h-12 shadow-xl mr-2 rounded-lg' />
                        <img src={payPal} alt="" className='w-10 h-6 sm:w-20 sm:h-12 shadow-xl mr-2 rounded-lg' />
                        <img src={applePay} alt="" className='w-10 h-6 sm:w-20 sm:h-12 shadow-xl mr-2 rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;