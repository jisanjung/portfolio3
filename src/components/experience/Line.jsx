import React from 'react'
import { DARKER_TEXT_COLOR } from '../../constants';

const Line = () => {
  return (
    <div className="relative my-4" style={{
      width: "3rem",
      height: "6rem",
    }}>
      <span className='rounded block absolute w-2 top-0 bottom-0 left-1/2 -translate-x-1/2' style={{
        backgroundColor: DARKER_TEXT_COLOR,
      }}></span>
    </div>
  )
}

export default Line