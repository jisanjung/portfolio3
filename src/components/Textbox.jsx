import React from 'react'
import { DARKER_TEXT_COLOR } from '../constants';
import { fieldClassName } from './fieldClassName';

const Textbox = ({ placeholder, name, label, error, className }) => {
  return (
    <div className={className}>
        <label htmlFor={name} className='text-sm block font-semibold mb-1.5' style={{ color: DARKER_TEXT_COLOR }}>{label ?? name}</label>
        <textarea
            id={name}
            placeholder={placeholder}
            name={name}
            rows={5}
            className={`${fieldClassName(error)} resize-y min-h-[8rem]`}
            style={{ color: DARKER_TEXT_COLOR }}
            required
        ></textarea>
    </div>
  )
}

export default Textbox
