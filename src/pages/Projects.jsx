import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Project from '../components/projects/Project'

import joos from "../assets/joos.webp";
import glitterpolish from "../assets/glitterpolish.webp";
import jobify from "../assets/jobify.webp";

const Projects = () => {
  return (
    <section className='mb-16'>
      <Heading text="Featured Projects"/>
      <SubHeading text="A list of projects that were done for clients as well as personal ones." className="my-6 md:mb-16 lg:mb-20 2xl:mb-22"/>
      <Project 
        imgSrc={joos} 
        title="Joo's" 
        about="A client template project that was built to promote a local sandwich shop. Built with HTML, SASS, and JavaScript."
        liveURL="https://joos.netlify.app/"
        codeURL="https://github.com/jisanjung/Joos"/>
      <Project 
        imgSrc={glitterpolish} 
        title="Glitter & Polish" 
        about="A client project that was built to automate the manual process of customer booking for a nail salon owner. Built with HTML, CSS, NodeJS, and Firebase."
        liveURL="https://glitterpolishnails.com/"
        codeURL="https://github.com/jisanjung/Glitter-and-Polish"/>
      <Project 
        imgSrc={jobify} 
        title="Jobify" 
        about="A web application that was built for the intent to assist with searching jobs within proximity. Built with React, Redux, Mapbox, Material UI, and the Adzuna API."
        liveURL="https://jobifyus.netlify.app/"
        codeURL="https://github.com/jisanjung/Jobify"/>
    </section>
  )
}

export default Projects