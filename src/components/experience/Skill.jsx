import React, { useState } from 'react'
import Tooltip from '../Tooltip'
import { PARAGRAPH_COLOR } from '../../constants';

const Skill = ({ tooltip, className, children }) => {

    const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={`inline-block relative text-3xl lg:text-4xl m-2.5 transition-colors hover:!text-purple-600 ${className}`} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} style={{
      color: PARAGRAPH_COLOR,
    }}>
        {showTooltip && <Tooltip text={tooltip} className="bottom-full left-1/2 -translate-x-1/2 mb-1.5 whitespace-nowrap pointer-events-none"/>}
        {children}
    </div>
  )
}

export default Skill
