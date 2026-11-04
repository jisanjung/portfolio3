import React from 'react'
import { DARKER_TEXT_COLOR } from '../constants';
import { fieldClassName } from './fieldClassName';

const Input = ({ type, placeholder, name, label, error, className }) => {
  return (
    <div className={className}>
        <label htmlFor={name} className='text-sm block font-semibold mb-1.5' style={{ color: DARKER_TEXT_COLOR }}>{label ?? name}</label>
        <input
            id={name}
            type={type}
            placeholder={placeholder}
            name={name}
            className={fieldClassName(error)}
            style={{ color: DARKER_TEXT_COLOR }}
            required
        />
    </div>
  )
}

export default Input
