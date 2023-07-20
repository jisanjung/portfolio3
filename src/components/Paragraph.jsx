import React from 'react'
import { DARKER_TEXT_COLOR, PARAGRAPH_COLOR } from '../constants'

const Paragraph = ({ text, className }) => {
  return (
    <p className={`text-sm lg:text-base ${className}`} style={{
      color: DARKER_TEXT_COLOR,
    }}>
        {text}
    </p>
  )
}

export default Paragraph