import React from 'react'
import Timeline from '../components/experience/Timeline';
import Heading from "../components/Heading";
import Item from '../components/Item';
import ElementHeading from '../components/ElementHeading';
import templeLogo from "../assets/temple.webp";
import SkillList from '../components/experience/SkillList';
import { DARKER_TEXT_COLOR, PARAGRAPH_COLOR } from '../constants';

const Experience = () => {
  return (
    <section className='md:mb-16'>
      <Heading text="Experience & Skills"/>
      <p className='my-6 md:mb-14 lg:mb-16 md:w-3/4 text-base lg:text-xl 2xl:text-2xl leading-relaxed' style={{ color: PARAGRAPH_COLOR }}>
        Keeping up with modern tech stacks has helped me gain valuable experience.
      </p>
      <div className='flex flex-col md:flex-row'>
        <div className='mb-14 w-full md:mb-0 md:w-1/2 md:mr-10 md:mt-0 order-1'>
          <Item className="w-full mb-8">
            <ElementHeading text="Education" className="mb-4"/>
            <div className='flex items-center gap-4'>
              <img src={templeLogo} alt='Temple University logo' width={56} height={56} loading='lazy' decoding='async' className='w-14 h-14 shrink-0 rounded-lg'/>
              <div className='text-sm lg:text-base leading-snug'>
                <p className='font-semibold' style={{ color: DARKER_TEXT_COLOR }}>BS, Information Science</p>
                <p style={{ color: PARAGRAPH_COLOR }}>Temple University</p>
                <p className='text-xs lg:text-sm mt-1' style={{ color: PARAGRAPH_COLOR }}>August 2020 – December 2023</p>
              </div>
            </div>
          </Item>
          <Item>
            <ElementHeading text="Skills" className="mb-4"/>
            <SkillList/>
          </Item>
        </div>
        <Timeline className="my-10 md:my-0 md:w-1/2 md:mr-4 md:order-2"/>
      </div>
    </section>
  )
}

export default Experience
