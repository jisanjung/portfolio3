import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdRocketLaunch, MdOutlineRocketLaunch } from "react-icons/md";
import { HiBriefcase, HiOutlineBriefcase } from "react-icons/hi";
import { BiUserCircle, BiSolidUserCircle } from "react-icons/bi";
import { COMPONENT_COLOR, DARKER_TEXT_COLOR } from '../constants';
import MainNavLink from './MainNavLink';

const MainNav = () => {

    // Warning: Received `true` for a non-boolean attribute
    const location = useLocation();
    const isAboutPage = location?.pathname === "/";
    const isExperiencePage = location?.pathname === "/experience";
    const isProjectsPage = location?.pathname === "/projects";
    const isContactPage = location?.pathname === "/contact";

  return (
    <nav className='flex rounded-lg mb-8 md:mb-10 lg:mb-12' style={{ backgroundColor: COMPONENT_COLOR, color: DARKER_TEXT_COLOR, }}>
        <MainNavLink to="/" isActive={isAboutPage} position="left">
            <div className='flex justify-center'>{isAboutPage ? <AiFillHome fontSize="21px"/> : <AiOutlineHome fontSize="21px"/>}</div>
            <p className='text-center my-2 font-semibold text-sm'>About</p>
        </MainNavLink>
        <MainNavLink to="/experience" isActive={isExperiencePage}>
            <div className='flex justify-center'>{isExperiencePage ? <HiBriefcase fontSize="21px"/> : <HiOutlineBriefcase fontSize="21px"/>}</div>
            <p className='text-center my-2 font-semibold text-sm'>Experience</p>
        </MainNavLink>
        <MainNavLink to="/projects" isActive={isProjectsPage}>
            <div className='flex justify-center'>{isProjectsPage ? <MdRocketLaunch fontSize="21px"/> : <MdOutlineRocketLaunch fontSize="21px"/>}</div>
            <p className='text-center my-2 font-semibold text-sm'>Projects</p>
        </MainNavLink>
        <MainNavLink to="/contact" isActive={isContactPage} position="right">
            <div className='flex justify-center'>{isContactPage ? <BiSolidUserCircle fontSize="21px"/> : <BiUserCircle fontSize="21px"/>}</div>
            <p className='text-center my-2 font-semibold text-sm'>Contact</p>
        </MainNavLink>
    </nav>
  )
}

export default MainNav