import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { HiBriefcase, HiOutlineBriefcase } from "react-icons/hi";
import { BiUserCircle, BiSolidUserCircle } from "react-icons/bi";

const Nav = () => {

    const location = useLocation();

  return (
    <nav className='flex'>
        <Link to="/" className='w-1/3'>
            <div className='flex justify-center'>{location?.pathname === "/" ? <AiFillHome fontSize="24px"/> : <AiOutlineHome fontSize="24px"/>}</div>
            <p className='text-center'>About</p>
        </Link>
        <Link to="/projects" className='w-1/3'>
            <div className='flex justify-center'>{location?.pathname === "/projects" ? <HiBriefcase fontSize="24px"/> : <HiOutlineBriefcase fontSize="24px"/>}</div>
            <p className='text-center'>Projects</p>
        </Link>
        <Link to="/contact" className='w-1/3'>
            <div className='flex justify-center'>{location?.pathname === "/contact" ? <BiSolidUserCircle fontSize="24px"/> : <BiUserCircle fontSize="24px"/>}</div>
            <p className='text-center'>Contact</p>
        </Link>
    </nav>
  )
}

export default Nav