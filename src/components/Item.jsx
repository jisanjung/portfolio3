import React from 'react'
import { DARKER_TEXT_COLOR } from '../constants';

const Item = ({ className, children }) => {
  return (
    <aside className={`bg-white rounded-xl border-2 p-5 lg:p-6 shadow-[-6px_6px_0_0_#17191c] ${className}`} style={{
      borderColor: DARKER_TEXT_COLOR,
    }}>
        {children}
    </aside>
  )
}

export default Item
