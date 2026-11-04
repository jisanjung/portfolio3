import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PARAGRAPH_COLOR } from '../constants';

const LINKS = [
  { href: "https://www.linkedin.com/in/jisanjung/", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://github.com/jisanjung", label: "GitHub", Icon: FaGithub },
];

const Footer = () => {
  return (
    <footer className='mt-auto pt-6 pb-2 border-t border-slate-300/70 flex items-center justify-between text-sm' style={{
      color: PARAGRAPH_COLOR,
    }}>
      <p>© {new Date().getFullYear()} Jisan Jung</p>
      <div className='flex items-center gap-4'>
        {LINKS.map(({ href, label, Icon }) => (
          <a key={label} href={href} target='_blank' rel="noopener noreferrer" aria-label={label} className='transition-colors hover:text-purple-600'>
            <Icon className='text-base'/>
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
