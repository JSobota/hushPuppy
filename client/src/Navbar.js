import React from 'react';
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import Brand from './Brand'
import './styles/nav.css'

function Navbar () {
  return (
    <nav className="navbar">
      <Hamburger classname="one" />
      <Brand />
      <Link to="/login">Login</Link>
    </nav>
  )
}

export default Navbar
