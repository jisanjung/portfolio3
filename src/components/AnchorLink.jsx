import React from 'react'

const AnchorLink = ({ href, text }) => {
  return (
    <a href={href} className='underline font-bold cursor-pointer' target='_blank' rel="noopener noreferrer">
        {text}
    </a>
  )
}

export default AnchorLink