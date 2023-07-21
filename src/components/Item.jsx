import React from 'react'

const Item = ({ className, children }) => {
  return (
    <aside className={`bg-white rounded-lg p-4 ${className}`}>
        {children}
    </aside>
  )
}

export default Item