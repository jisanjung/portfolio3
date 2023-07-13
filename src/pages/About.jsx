import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button';
import { IoMdArrowRoundForward } from "react-icons/io" 

const About = () => {
  return (
    <section>
      <Heading text="Software Engineer, Full Stack Developer, UI Enthusiast"/>
      <div className='my-6'>
        <SubHeading text="Hi there I'm Jisan."/>
        <SubHeading text="What I love doing most is solving business problems by implementing simple, friendly user interfaces."/>
      </div>
      <Button text="See my work">
        <IoMdArrowRoundForward className='text-xl lg:text-2xl xl:text-3xl' style={{
          marginTop: "1px",
        }}/>
      </Button>
    </section>
  )
}

export default About