import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu'
import { NavLink, Link } from 'react-router-dom'
// eslint-disable-next-line
import './styles/hamburger.css'

class Hamburger extends Component {

  render () {
    return (
      <Menu isOpen={ false } >
        <NavLink exact id="home" className="bm-link" activeClassName="bm-link-highlight" to="/">Home</NavLink>
        <NavLink id="login" className="bm-link" activeClassName="bm-link-highlight" to="/login">Login</NavLink>
        <Link id="about" className="bm-link" to="/logout">Logout</Link>
      </Menu>
    )
  }
}

export default Hamburger
