import React from 'react'

const ButtonSmall = ({ text, children, full, className }) => {
  return (
    <div className={`inline-block relative ${full && "w-full"} ${className}`}>
        <button className={`bg-purple-600 hover:bg-purple-800 active:bg-purple-800 text-white py-4 px-9 rounded-lg font-semibold relative z-10 active:top-2 active:right-2 ${full && "w-full text-center"}`}>
            <div className={`flex ${full && "justify-center"}`}>
                <p className='mr-2'>{text}</p>
                <span className='flex items-center'>{children}</span>
            </div>
        </button>
        <div className='absolute top-2 -left-2 -bottom-2 right-2 bg-black rounded-lg'></div>
    </div>
  )
}

export default ButtonSmall