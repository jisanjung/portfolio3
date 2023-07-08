import React from 'react'
import { DARKER_TEXT_COLOR } from '../constants'
import { useMediaQuery } from '../hooks/useMediaQuery'

const Heading = ({ text }) => {

    const isSmallDesktop = useMediaQuery("(min-width: 1024px)");
    const isLargeDesktop = useMediaQuery("(min-width: 1440px)");

    const determineTextSize = () => {
        if (isLargeDesktop) return "48px";
        if (isSmallDesktop) return "40px"; 
        return "32px";
    }

  return (
    <div>
        <h1 style={{ color: DARKER_TEXT_COLOR, fontSize: determineTextSize() }} className='font-extrabold mb-3'>
            {text}
        </h1>
        <hr className='w-10 h-1 bg-purple-600'></hr>
    </div>
  )
}

export default Heading