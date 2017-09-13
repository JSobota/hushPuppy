import React from 'react';
import Hamburger from './Hamburger'
import Brand from './Brand'
import './styles/nav.css'

function Navbar () {
  return (
    <nav className="navbar">
      <Hamburger classname="one" />
      <Brand />
    </nav>
  )
}

export default Navbar
