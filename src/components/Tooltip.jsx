import React from 'react'
import { COMPONENT_COLOR, DARKER_TEXT_COLOR } from '../constants'

const Tooltip = ({ text, className }) => {
  return (
    <span className={`absolute text-sm px-1 rounded ${className}`} style={{
        color: COMPONENT_COLOR,
        background: DARKER_TEXT_COLOR,
    }}>
        {text}
    </span>
  )
}

export default Tooltip