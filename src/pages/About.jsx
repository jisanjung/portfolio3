import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button';
import { IoMdArrowRoundForward } from "react-icons/io"
import { Link } from 'react-router-dom';
import { DARKER_TEXT_COLOR, PARAGRAPH_COLOR } from '../constants';

const About = () => {
  return (
    <section className='mb-16'>
      <Heading text="Software Engineer, Full Stack Developer, UI Enthusiast"/>
      <div className='my-6 lg:my-10 2xl:my-12 md:w-3/4 space-y-2 lg:space-y-3'>
        <p className='text-lg lg:text-[22.5px] 2xl:text-[27px] font-semibold tracking-tight' style={{ color: DARKER_TEXT_COLOR }}>
          Hi there, I&apos;m Jisan.
        </p>
        <p className='text-base lg:text-xl 2xl:text-2xl leading-relaxed' style={{ color: PARAGRAPH_COLOR }}>
          What I love doing most is solving business problems by implementing simple, friendly user interfaces.
        </p>
      </div>
      <Link to="/experience">
        <Button text="My Experience">
          <IoMdArrowRoundForward className='text-lg lg:text-xl 2xl:text-2xl'/>
        </Button>
      </Link>
    </section>
  )
}

export default About
