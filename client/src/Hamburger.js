import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
// eslint-disable-next-line
import hamburger from './styles/hamburger.css'

class Hamburger extends Component {

  render () {
    return (
      <Menu isOpen={ false } >
        <Link id="home" className="bm-link" to="/">Home</Link>
        <Link id="login" className="bm-link" to="/login">Login</Link>
        <Link id="about" className="bm-link" to="/about">About</Link>
      </Menu>
    )
  }
}

export default Hamburger
