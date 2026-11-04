import React from 'react'

const ButtonSmall = ({ type, text, children, full, disabled, className = "" }) => {
  return (
    <button type={type} disabled={disabled} className={`group inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3.5 px-7 rounded-lg font-semibold shadow-[-6px_6px_0_0_#000] transition duration-150 hover:-translate-x-0.5 hover:translate-y-0.5 hover:shadow-[-4px_4px_0_0_#000] active:-translate-x-1.5 active:translate-y-1.5 active:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none ${full ? "w-full" : ""} ${className}`}>
        <span>{text}</span>
        {children && <span className='flex items-center transition-transform duration-200 group-hover:translate-x-1'>{children}</span>}
    </button>
  )
}

export default ButtonSmall
