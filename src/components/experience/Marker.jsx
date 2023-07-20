import React from 'react'
import ElementHeading from '../ElementHeading';
import Paragraph from '../Paragraph';

const Marker = ({ text, subText, imgUrl }) => {
  return (
    <div className='flex items-center relative'>
        <span className='block rounded-full mr-4' style={{
            minWidth: "3rem",
            minHeight: "3rem",
        }}>
          {imgUrl && <img src={imgUrl} alt='Company Logo' className='rounded-full object-contain' style={{
            width: "3rem",
            height: "3rem",
        }}/>}
        </span>
        <div className='absolute left-16 right-0 top-1/2 -translate-y-1/2'>
          <ElementHeading text={text}/>
          <Paragraph text={subText}/>
        </div>
    </div>
  )
}

export default Marker