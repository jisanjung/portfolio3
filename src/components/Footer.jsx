import React from 'react';
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
  
const Footer = () => {

  return (
    <footer className='absolute bottom-0 left-0 right-0 py-6'>
        <div className='flex justify-center'>
            <FaLinkedinIn/>
            <FaGithub/>
            <SiGmail/>
        </div>
    </footer>
  )
}

export default Footer