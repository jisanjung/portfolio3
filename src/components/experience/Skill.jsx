import React, { useState } from 'react'
import Tooltip from '../Tooltip'
import { DARKER_TEXT_COLOR } from '../../constants';

const Skill = ({ tooltip, className, children }) => {

    const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={`inline-block relative text-4xl m-2 mb-3 ${className}`} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} style={{
      color: DARKER_TEXT_COLOR,
    }}>
        {showTooltip && <Tooltip text={tooltip} className="right-0"/>}
        {children}
    </div>
  )
}

export default Skill