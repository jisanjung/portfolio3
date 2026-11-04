import React from 'react'
import Heading from '../components/Heading'
import Project from '../components/projects/Project'
import { PARAGRAPH_COLOR } from '../constants';

import joos from "../assets/joos.webp";
import glitterpolish from "../assets/glitterpolish.webp";
import jobify from "../assets/jobify.webp";

const PROJECTS = [
  {
    imgSrc: joos,
    title: "Joo's",
    type: "Client",
    about: "A client template project that was built to promote a local sandwich shop.",
    tech: ["HTML", "SASS", "JavaScript"],
    liveURL: "https://joos.netlify.app/",
    codeURL: "https://github.com/jisanjung/Joos",
  },
  {
    imgSrc: glitterpolish,
    title: "Glitter & Polish",
    type: "Client",
    about: "A client project that was built to automate the manual process of customer booking for a nail salon owner.",
    tech: ["HTML", "CSS", "NodeJS", "Firebase"],
    liveURL: "https://glitterpolishnails.com/",
    codeURL: "https://github.com/jisanjung/Glitter-and-Polish",
  },
  {
    imgSrc: jobify,
    title: "Jobify",
    type: "Personal",
    about: "A web application that was built for the intent to assist with searching jobs within proximity.",
    tech: ["React", "Redux", "Mapbox", "Material UI", "Adzuna API"],
    liveURL: "https://jobifyus.netlify.app/",
    codeURL: "https://github.com/jisanjung/Jobify",
  },
];

const Projects = () => {
  return (
    <section className='mb-16'>
      <Heading text="Featured Projects"/>
      <p className='my-6 md:mb-14 lg:mb-16 md:w-3/4 text-base lg:text-xl 2xl:text-2xl leading-relaxed' style={{ color: PARAGRAPH_COLOR }}>
        A list of projects that were done for clients as well as personal ones.
      </p>
      {PROJECTS.map((project) => (
        <Project key={project.title} {...project}/>
      ))}
    </section>
  )
}

export default Projects
