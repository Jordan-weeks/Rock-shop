import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/nav.css'

const Nav = ({navOpen, setNavOpen}) => {
  return (
    <nav>
      <NavLink onClick={()=>setNavOpen(!navOpen)} to="/">Home</NavLink>
      <NavLink onClick={()=>setNavOpen(!navOpen)} to="/about">About</NavLink>
      <NavLink onClick={()=>setNavOpen(!navOpen)} to="/shop">Shop</NavLink>
    </nav>
  )
}

export default Nav