import React from 'react';
import { DARKER_TEXT_COLOR } from "../constants";

const ElementHeading = ({ text, className }) => {
  return (
    <h3 className={`font-bold text-xl ${className}`} style={{
        color: DARKER_TEXT_COLOR,
    }}>
        {text}
    </h3>
  )
}

export default ElementHeading