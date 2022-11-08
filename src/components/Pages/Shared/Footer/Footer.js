import React from 'react';
import { SlSocialTwitter, SlSocialYoutube, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="footer flex justify-center md:flex-row flex-col items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col ml-10">
                <p className='text-lg'>Copyright ©seantuck, 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col mr-10 gap-4 md:place-self-center md:justify-self-end">
                <a href="https://twitter.com/seantuck?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer"><SlSocialTwitter className='h-6 w-6'></SlSocialTwitter></a>
                <a href="https://www.youtube.com/channel/UC_43mQmHwHPTBBqImFrWU3Q" target="_blank" rel="noopener noreferrer"><SlSocialYoutube className='h-6 w-6'></SlSocialYoutube></a>
                <a href="https://www.instagram.com/seantuck/?hl=en" target="_blank" rel="noopener noreferrer"><SlSocialInstagram className='h-6 w-6'></SlSocialInstagram></a>
            </div>
        </footer>
    );
};

export default Footer;