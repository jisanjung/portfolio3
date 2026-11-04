import React from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { BACKGROUND_COLOR, DARKER_TEXT_COLOR, PARAGRAPH_COLOR } from '../../constants';

const Project = ({ imgSrc, title, type, about, tech = [], liveURL, codeURL }) => {
  return (
    <article className='group flex flex-col md:flex-row overflow-hidden bg-white rounded-xl border-2 mb-8 shadow-[-6px_6px_0_0_#17191c]' style={{
      borderColor: DARKER_TEXT_COLOR,
    }}>
        <a href={liveURL} target='_blank' rel="noopener noreferrer" className='block md:w-2/5 shrink-0 overflow-hidden border-b-2 md:border-b-0 md:border-r-2' style={{
          borderColor: DARKER_TEXT_COLOR,
        }}>
          <img src={imgSrc} alt={`Screenshot of ${title}`} className='w-full h-52 md:h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]'/>
        </a>
        <div className='flex flex-col p-5 lg:p-6'>
            <p className='text-xs font-semibold uppercase tracking-wider text-purple-600'>{type} project</p>
            <h3 className='mt-1 text-xl lg:text-2xl font-bold tracking-tight' style={{ color: DARKER_TEXT_COLOR }}>{title}</h3>
            <p className='mt-2 text-sm lg:text-base leading-relaxed' style={{ color: PARAGRAPH_COLOR }}>{about}</p>
            <ul className='mt-4 flex flex-wrap gap-2'>
              {tech.map((t) => (
                <li key={t} className='text-xs font-medium px-2.5 py-1 rounded-full border border-slate-300' style={{
                  color: DARKER_TEXT_COLOR,
                  backgroundColor: BACKGROUND_COLOR,
                }}>
                  {t}
                </li>
              ))}
            </ul>
            <div className='mt-5 flex items-center gap-6 text-sm lg:text-base font-semibold'>
              <a href={liveURL} target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 transition-colors'>
                Live site <FiArrowUpRight className='text-lg'/>
              </a>
              <a href={codeURL} target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-1.5 hover:text-purple-600 transition-colors' style={{ color: DARKER_TEXT_COLOR }}>
                <FiGithub/> Code
              </a>
            </div>
        </div>
    </article>
  )
}

export default Project
