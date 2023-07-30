import React from 'react'
import Skill from './Skill';

import { FaReact, FaNodeJs, FaHtml5, FaJava } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiCsharp, SiDotnet } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { BsFillDatabaseFill } from "react-icons/bs";


const SkillList = () => {
  return (
    <div className="flex justify-center items-center flex-wrap mb-4">
        <Skill tooltip="React">
          <FaReact/>
        </Skill>
        <Skill tooltip="Redux">
          <SiRedux/>
        </Skill>
        <Skill tooltip="Tailwind">
          <SiTailwindcss/>
        </Skill>
        <Skill tooltip="NodeJS">
          <FaNodeJs/>
        </Skill>
        <Skill tooltip="TypeScript">
          <BiLogoTypescript/>
        </Skill>
        <Skill tooltip="JavaScript">
          <BiLogoJavascript/>
        </Skill>
        <Skill tooltip="HTML">
          <FaHtml5/>
        </Skill>
        <Skill tooltip="CSS">
          <DiCss3/>
        </Skill>
        <Skill tooltip="C#">
          <SiCsharp/>
        </Skill>
        <Skill tooltip=".NET">
          <SiDotnet/>
        </Skill>
        <Skill tooltip="SQL">
          <BsFillDatabaseFill/>
        </Skill>
        <Skill tooltip="Java">
          <FaJava/>
        </Skill>
    </div>
  )
}

export default SkillList