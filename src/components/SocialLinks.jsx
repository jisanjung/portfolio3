import React from 'react';
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MY_EMAIL, PARAGRAPH_COLOR } from '../constants';
  
const SocialLinks = ({ className }) => {

  return (
    <div className={`flex ${className}`}>
      <a href='https://www.linkedin.com/in/jisanjung/' target='_blank' rel="noopener noreferrer">
        <FaLinkedinIn className='text-2xl mr-2 relative transition-all hover:-translate-y-1' style={{
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
  )
}

export default SocialLinks