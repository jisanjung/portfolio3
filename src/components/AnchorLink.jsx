import React from 'react'

const AnchorLink = ({ href, text }) => {
  return (
    <a href={href} className='underline font-bold'>
        {text}
    </a>
  )
}

export default AnchorLink