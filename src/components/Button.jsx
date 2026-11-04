import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { LARGE_DESKTOP_BREAKPOINT, SMALL_DESKTOP_BREAKPOINT } from '../constants';

const Button = ({ text, children }) => {

    const isSmallDesktop = useMediaQuery(`(min-width: ${SMALL_DESKTOP_BREAKPOINT})`);
    const isLargeDesktop = useMediaQuery(`(min-width: ${LARGE_DESKTOP_BREAKPOINT})`);

    const determineTextSize = () => {
        if (isLargeDesktop) return "19px";
        if (isSmallDesktop) return "17px";
        return "16px";
    }

  return (
    <button className='group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3.5 px-7 lg:py-4 lg:px-9 rounded-lg font-semibold shadow-[-8px_8px_0_0_#000] transition duration-150 hover:-translate-x-0.5 hover:translate-y-0.5 hover:shadow-[-6px_6px_0_0_#000] active:-translate-x-2 active:translate-y-2 active:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2' style={{
      fontSize: determineTextSize(),
    }}>
        <span>{text}</span>
        <span className='flex items-center transition-transform duration-200 group-hover:translate-x-1'>{children}</span>
    </button>
  )
}

export default Button
