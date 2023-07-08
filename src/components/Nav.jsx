import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { HiBriefcase, HiOutlineBriefcase } from "react-icons/hi";
import { BiUserCircle, BiSolidUserCircle } from "react-icons/bi";
import { COMPONENT_COLOR } from '../constants';

const Nav = () => {

    const location = useLocation();
    const isAboutPage = location?.pathname === "/";
    const isProjectsPage = location?.pathname === "/projects";
    const isContactPage = location?.pathname === "/contact";

  return (
    <nav className='flex rounded-lg' style={{ backgroundColor: COMPONENT_COLOR, }}>
        <Link to="/" className={`w-1/3 pt-4 rounded-l-lg ${isAboutPage && "border-b-4 border-purple-600"}`}>
            <div className='flex justify-center'>{isAboutPage ? <AiFillHome fontSize="20px"/> : <AiOutlineHome fontSize="20px"/>}</div>
            <p className='text-center mt-1 mb-2 font-semibold text-sm'>About</p>
        </Link>
        <Link to="/projects" className={`w-1/3 pt-4 ${isProjectsPage && "border-b-4 border-purple-600"}`}>
            <div className='flex justify-center'>{isProjectsPage ? <HiBriefcase fontSize="20px"/> : <HiOutlineBriefcase fontSize="20px"/>}</div>
            <p className='text-center mt-1 mb-2 font-semibold text-sm'>Projects</p>
        </Link>
        <Link to="/contact" className={`w-1/3 pt-4 rounded-r-lg ${isContactPage && "border-b-4 border-purple-600"}`}>
            <div className='flex justify-center'>{isContactPage ? <BiSolidUserCircle fontSize="20px"/> : <BiUserCircle fontSize="20px"/>}</div>
            <p className='text-center mt-1 mb-2 font-semibold text-sm'>Contact</p>
        </Link>
    </nav>
  )
}

export default Nav