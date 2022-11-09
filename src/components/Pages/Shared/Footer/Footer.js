import React from 'react';
import { SlSocialTwitter, SlSocialYoutube, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="footer flex justify-center md:flex-row flex-col items-center p-4 bg-neutral text-neutral-content">
            <div className="ml-10 pb-1">
                <p className=''>Copyright ©shooting on the street, 2022 - All right reserved</p>
            </div>
            <div className="flex items-center">
                <a href="https://twitter.com/seantuck?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer"><SlSocialTwitter className='h-4 w-4'></SlSocialTwitter></a>
                <a href="https://www.youtube.com/channel/UC_43mQmHwHPTBBqImFrWU3Q" target="_blank" rel="noopener noreferrer"><SlSocialYoutube className='h-4 w-4'></SlSocialYoutube></a>
                <a href="https://www.instagram.com/seantuck/?hl=en" target="_blank" rel="noopener noreferrer"><SlSocialInstagram className='h-4 w-4'></SlSocialInstagram></a>
            </div>
        </footer>
    );
};

export default Footer;