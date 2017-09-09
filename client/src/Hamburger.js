import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import hamburger from './styles/hamburger.css'

class Hamburger extends Component {
  render () {
    // styles is required for the menu to work

    // link style is not required for the burger menu to work

    return (
      <Menu >
        <Link id="home" className="bm-link" to="/">Home</Link>
        <Link id="about" className="bm-link" to="/about">About</Link>
      </Menu>
    )
  }
}

export default Hamburger
