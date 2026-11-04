import React from 'react'
import { Link } from 'react-router-dom'

const MainNavLink = ({ children, to, isActive }) => {
  return (
    <Link
      to={to}
      aria-current={isActive ? "page" : undefined}
      className={`flex-1 pt-4 border-b-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-400 ${
        isActive
          ? "border-purple-600"
          : "border-transparent hover:bg-slate-50 hover:text-purple-600"
      }`}
    >
        {children}
    </Link>
  )
}

export default MainNavLink
