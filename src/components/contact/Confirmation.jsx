import React from 'react';
import { FcCheckmark } from "react-icons/fc";

const Confirmation = () => {
  return (
    <div className="mt-12 md:mt-auto xl:text-lg">
        <h2 className="flex items-center">Thanks for your response!
            <FcCheckmark className="ml-2 text-lg xl:text-xl"/>
        </h2>
        <h3>Connect with me on <a href="https://www.linkedin.com/in/jisan-jung-33129b179/" className="font-bold lg:hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</h3>
    </div>
  )
}

export default Confirmation