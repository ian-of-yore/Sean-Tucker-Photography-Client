import React from 'react';
import { SlSocialTwitter, SlSocialYoutube, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-900 text-white flex justify-around">
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
    );
};

export default Footer;