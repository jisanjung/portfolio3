import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Button = ({ text, children }) => {

    const isSmallDesktop = useMediaQuery("(min-width: 1024px)");
    const isLargeDesktop = useMediaQuery("(min-width: 1279px)");

    const determineTextSize = () => {
        if (isLargeDesktop) return "21px";
        if (isSmallDesktop) return "18px"; 
        return "16px";
    }

  return (
    <div className='inline-block relative'>
        <button className='bg-purple-600 hover:bg-purple-800 active:bg-purple-800 text-white py-4 px-9 lg:py-5 lg:px-12 xl:px-14 rounded-lg font-semibold relative z-10 active:top-2 active:right-2' style={{
        fontSize: determineTextSize(),
        }}>
            <div className='flex'>
                <p className='mr-2'>{text}</p>
                <span className='flex items-center'>{children}</span>
            </div>
        </button>
        <div className='absolute top-2 -left-2 -bottom-2 right-2 bg-black rounded-lg'></div>
    </div>
  )
}

export default Button