import React, { useEffect, useRef, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi';
import Tooltip from './Tooltip';

const CopyButton = ({ value, label = "text" }) => {

  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable (e.g. insecure context); leave the text selectable
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
      className={`relative flex items-center justify-center w-8 h-8 shrink-0 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
        copied ? "text-purple-600" : "text-slate-500 hover:text-purple-600 hover:bg-white"
      }`}
    >
      {copied ? <FiCheck className='text-lg'/> : <FiCopy className='text-base'/>}
      {copied && <Tooltip text="Copied!" className="bottom-full left-1/2 -translate-x-1/2 mb-1 whitespace-nowrap pointer-events-none"/>}
    </button>
  )
}

export default CopyButton
