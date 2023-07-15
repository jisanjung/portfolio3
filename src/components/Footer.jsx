import React from 'react';
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
  
const Footer = () => {

    const screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  return (
    <footer className='absolute bottom-0 py-6'>
        {console.log(screenWidth)}
        <div className='flex justify-center'>
            <FaLinkedinIn/>
            <FaGithub/>
            <SiGmail/>
        </div>
    </footer>
  )
}

export default Footer