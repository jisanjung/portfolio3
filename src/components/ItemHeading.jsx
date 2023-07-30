import React from 'react'

const ItemHeading = ({ text, className }) => {
  return (
    <h4 className={`font-bold ${className}`}>
        {text}
    </h4>
  )
}

export default ItemHeading