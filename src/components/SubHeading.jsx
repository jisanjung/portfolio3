import React from 'react'
import { DARKER_TEXT_COLOR, LARGE_DESKTOP_BREAKPOINT, SMALL_DESKTOP_BREAKPOINT } from '../constants';
import { useMediaQuery } from '../hooks/useMediaQuery';

const SubHeading = ({ text, className }) => {

    const isSmallDesktop = useMediaQuery(`(min-width: ${SMALL_DESKTOP_BREAKPOINT})`);
    const isLargeDesktop = useMediaQuery(`(min-width: ${LARGE_DESKTOP_BREAKPOINT})`);

    const determineTextSize = () => {
        if (isLargeDesktop) return "27px";
        if (isSmallDesktop) return "22.5px"; 
        return "18px";
    }

  return (
    <h3 className={`font-semibold tracking-tight md:w-3/4 ${className}`} 
    style={{
        color: DARKER_TEXT_COLOR,
        fontSize: determineTextSize(),
    }}>
        {text}
    </h3>
  )
}

export default SubHeading