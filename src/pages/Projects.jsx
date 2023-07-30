import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Project from '../components/projects/Project'

import joos from "../assets/joos.png";
import glitterpolish from "../assets/glitterpolish.png";
import jobify from "../assets/jobify.png";

const Projects = () => {
  return (
    <section>
      <Heading text="Projects & Applications"/>
      <SubHeading text="A list of projects that were done for clients as well as personal ones." className="my-6"/>
      <Project imgSrc={joos} title="Joo's" about="A client project that was built to promote a local sandwich shop. Built with HTML, SASS, and JavaScript."/>
      <Project imgSrc={glitterpolish} title="Glitter & Polish" about="A client project that was built to automate the manual process of customer booking for a nail salon owner. Built with HTML, CSS, JavaScript, PHP, and MySQL."/>
      <Project imgSrc={jobify} title="Jobify" about="A web application that was built for the intent to assist with searching jobs within proximity. Built with React, Redux, Mapbox, Material UI, and the Adzuna API."/>
    </section>
  )
}

export default Projects