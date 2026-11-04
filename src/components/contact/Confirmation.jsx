import React from 'react';
import { FiCheck } from "react-icons/fi";
import { DARKER_TEXT_COLOR, PARAGRAPH_COLOR } from '../../constants';

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center text-center py-10">
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white text-2xl mb-4">
            <FiCheck/>
        </span>
        <h2 className="text-xl lg:text-2xl font-bold tracking-tight" style={{ color: DARKER_TEXT_COLOR }}>
            Thanks for reaching out!
        </h2>
        <p className="mt-2 text-sm lg:text-base" style={{ color: PARAGRAPH_COLOR }}>
            I&apos;ll get back to you soon. In the meantime, connect with me on{" "}
            <a href="https://www.linkedin.com/in/jisan-jung-33129b179/" className="font-semibold text-purple-600 hover:text-purple-800 underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
    </div>
  )
}

export default Confirmation
