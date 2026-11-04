import React from 'react'
import { DARKER_TEXT_COLOR } from '../../constants';

const Line = ({ inSameCompany }) => {
  return (
    <div className="relative my-2" style={{
      width: "3rem",
      height: `${inSameCompany ? "2rem" : "5rem"}`,
    }}>
      <span className='rounded-full block absolute w-1 top-0 bottom-0 left-1/2 -translate-x-1/2' style={{
        backgroundColor: DARKER_TEXT_COLOR,
      }}></span>
    </div>
  )
}

export default Line
