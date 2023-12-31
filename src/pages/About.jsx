import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button';
import { IoMdArrowRoundForward } from "react-icons/io" 
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <Heading text="Software Engineer, Full Stack Developer, UI Enthusiast"/>
      <div className='my-6 lg:my-10 2xl:my-12'>
        <SubHeading text="Hi there I'm Jisan."/>
        <SubHeading text="What I love doing most is solving business problems by implementing simple, friendly user interfaces."/>
      </div>
      <Link to="/experience">
        <Button text="My Experience">
          <IoMdArrowRoundForward className='text-xl lg:text-2xl 2xl:text-3xl' style={{
            marginTop: "1px",
          }}/>
        </Button>
      </Link>
    </section>
  )
}

export default About