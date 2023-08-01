import React, { useState } from 'react'

const Input = ({ type, placeholder, name, error, className }) => {

    const [focused, setFocused] = useState(false);

    const determineBorderStyle = () => {
        if (error) {
            return "border-b-2 border-red-600";
        }
        if (focused) {
            return "border-b-2 border-purple-600";
        }
        return "border-b border-gray-600";
    }

  return (
    <div>
        <label htmlFor={name} className='text-sm block font-semibold'>{name}</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            name={name} 
            className={`${determineBorderStyle()} bg-transparent py-3 w-full focus:outline-none ${className}`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        />
    </div>
  )
}

export default Input