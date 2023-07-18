import React from 'react';
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MY_EMAIL, PARAGRAPH_COLOR } from '../constants';
  
const Footer = () => {

  return (
    <footer className='absolute bottom-0 left-0 right-0 py-6 md:py-8 2xl:py-9'>
        <div className='flex justify-center'>
          <a href='https://www.linkedin.com/in/jisan-jung-33129b179/' target='_blank' rel="noopener noreferrer">
            <FaLinkedinIn className='text-2xl mx-2 relative transition-all hover:-translate-y-1' style={{
              color: PARAGRAPH_COLOR,
            }}/>
          </a>
          <a href='https://github.com/jisanjung' target='_blank' rel="noopener noreferrer">
            <FaGithub className='text-2xl mx-2 transition-all hover:-translate-y-1' style={{
              color: PARAGRAPH_COLOR,
            }}/>
          </a>
          <a href={`mailto:${MY_EMAIL}`} target='_blank' rel="noopener noreferrer">
            <SiGmail className='text-2xl mx-2 transition-all hover:-translate-y-1' style={{
              color: PARAGRAPH_COLOR,
            }}/>
          </a>
        </div>
        <p className='text-center text-sm lg:text-base 2xl:text-lg pt-4' style={{
          color: PARAGRAPH_COLOR,
        }}>&copy; {new Date().getFullYear()} Jisan Jung</p>
    </footer>
  )
}

export default Footer