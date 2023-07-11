import React from 'react'
import { Link } from 'react-router-dom'

const MainNavLink = ({ children, to, isActive, position }) => {

    const positionBasedStyle = () => {
        if (position === "right") {
            return "rounded-r-lg";
        }
        if (position === "left") {
            return "rounded-l-lg";
        }
        return "";
    }

  return (
    <Link to={to} className={`w-1/3 pt-4 ${positionBasedStyle()} hover:bg-purple-600 hover:text-white ${isActive && "border-b-4 border-purple-600"}`}>
        {children}
    </Link>
  )
}

export default MainNavLink