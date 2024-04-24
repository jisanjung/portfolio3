import React from 'react'
import Timeline from '../components/experience/Timeline';
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Item from '../components/Item';
import ElementHeading from '../components/ElementHeading';
import Paragraph from '../components/Paragraph';
import templeLogo from "../assets/temple.png";
import SkillList from '../components/experience/SkillList';

const Experience = () => {
  return (
    <section>
      <Heading text="Experience & Skills"/>
      <SubHeading text="Keeping up with modern tech stacks has helped me gain valuable experience." className="my-6 md:mb-16 lg:mb-20 2xl:mb-22"/>
      <div className='flex flex-col md:flex-row'>
        <div className='mb-14 w-full md:mb-0 md:w-1/2 md:mr-10 md:mt-0'>
          <Item className="w-full mb-6">
            <ElementHeading text="Education" className="mb-4"/>
            <div className='flex items-center'>
              <span className='block w-16 h-16 mr-4 rounded-lg'>
                <img src={templeLogo} alt='Temple Logo' className='rounded-lg'/>
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
        <Timeline className="md:w-1/2 md:mr-4"/>
      </div>
    </section>
  )
}

export default Experience