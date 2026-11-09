import React from 'react'
import { DARKER_TEXT_COLOR, PARAGRAPH_COLOR } from '../../constants';

const Marker = ({ text, subText, imgUrl }) => {
  return (
    <div className='flex items-center gap-4'>
        <span className='flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-white ring-2 overflow-hidden' style={{
          '--tw-ring-color': DARKER_TEXT_COLOR,
        }}>
          {imgUrl && <img src={imgUrl} alt='' width={48} height={48} loading='lazy' decoding='async' className='w-full h-full object-contain'/>}
        </span>
        <div>
          <h3 className='font-bold text-base lg:text-lg leading-tight' style={{ color: DARKER_TEXT_COLOR }}>{text}</h3>
          <p className='text-sm mt-0.5' style={{ color: PARAGRAPH_COLOR }}>{subText}</p>
        </div>
    </div>
  )
}

export default Marker
