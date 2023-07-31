import React from 'react'
import Timeline from '../components/experience/Timeline';
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Item from '../components/Item';
import ElementHeading from '../components/ElementHeading';
import Paragraph from '../components/Paragraph';
import { TEMPLE_LOGO } from '../constants';
import SkillList from '../components/experience/SkillList';

const Experience = () => {
  return (
    <section>
      <Heading text="Experience & Skills"/>
      <SubHeading text="Keeping up with modern tech stacks has helped me gain valuable experience." className="my-6"/>
      <div className='flex flex-col md:flex-row mt-16'>
        <Timeline className="md:w-1/2 md:mr-4"/>
        <div className='mt-12 w-full md:w-1/2 md:ml-4 md:mt-0'>
          <Item className="w-full mb-6">
            <ElementHeading text="Education" className="mb-4"/>
            <div className='flex items-center'>
              <span className='block w-16 h-16 mr-4 rounded-lg'>
                <img src={TEMPLE_LOGO} alt='Temple Logo' className='rounded-lg'/>
              </span>
              <div>
                <Paragraph text="Temple University"/>
                <Paragraph text="BS, Information Science" className="font-bold"/>
                <Paragraph text="August 2020 - December 2023" className="italic"/>
              </div>
            </div>
          </Item>
          <Item>
            <ElementHeading text="Skills" className="mb-4"/>
            <SkillList/>
          </Item>
        </div>
      </div>
    </section>
  )
}

export default Experience