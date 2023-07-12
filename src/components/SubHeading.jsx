import React from 'react'
import { DARKER_TEXT_COLOR } from '../constants';
import { useMediaQuery } from '../hooks/useMediaQuery';

const SubHeading = ({ text }) => {

    const isSmallDesktop = useMediaQuery("(min-width: 1024px)");
    const isLargeDesktop = useMediaQuery("(min-width: 1440px)");

    const determineTextSize = () => {
        if (isLargeDesktop) return "27px";
        if (isSmallDesktop) return "22.5px"; 
        return "18px";
    }

  return (
    <h3 className='font-semibold tracking-tight my-6' 
    style={{
        color: DARKER_TEXT_COLOR,
        fontSize: determineTextSize(),
    }}>
        {text}
    </h3>
  )
}

export default SubHeading