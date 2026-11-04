import React from 'react'
import { useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdRocketLaunch, MdOutlineRocketLaunch } from "react-icons/md";
import { HiBriefcase, HiOutlineBriefcase } from "react-icons/hi";
import { BiUserCircle, BiSolidUserCircle } from "react-icons/bi";
import { COMPONENT_COLOR, DARKER_TEXT_COLOR } from '../constants';
import MainNavLink from './MainNavLink';

const NAV_ITEMS = [
  { to: "/", label: "About", ActiveIcon: AiFillHome, Icon: AiOutlineHome },
  { to: "/experience", label: "Experience", ActiveIcon: HiBriefcase, Icon: HiOutlineBriefcase },
  { to: "/projects", label: "Projects", ActiveIcon: MdRocketLaunch, Icon: MdOutlineRocketLaunch },
  { to: "/contact", label: "Contact", ActiveIcon: BiSolidUserCircle, Icon: BiUserCircle },
];

const MainNav = () => {

    const { pathname } = useLocation();

  return (
    <nav className='flex overflow-hidden rounded-lg mb-8 md:mb-10 lg:mb-12' style={{ backgroundColor: COMPONENT_COLOR, color: DARKER_TEXT_COLOR, }}>
        {NAV_ITEMS.map(({ to, label, ActiveIcon, Icon }) => {
            const isActive = pathname === to;
            const NavIcon = isActive ? ActiveIcon : Icon;
            return (
                <MainNavLink key={to} to={to} isActive={isActive}>
                    <div className='flex justify-center'><NavIcon fontSize="21px"/></div>
                    <p className='text-center my-2 font-semibold text-sm'>{label}</p>
                </MainNavLink>
            );
        })}
    </nav>
  )
}

export default MainNav
