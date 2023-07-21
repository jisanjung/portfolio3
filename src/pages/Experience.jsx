import React from 'react'
import Timeline from '../components/experience/Timeline';
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

const Experience = () => {
  return (
    <div>
      <Heading text="Experience & Skills"/>
      <SubHeading text="Keeping up with modern tech stacks has helped me gain valuable experience." className="my-6"/>
      <Timeline className="mt-16"/>
    </div>
  )
}

export default Experience