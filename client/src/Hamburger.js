import React, { Component } from 'react'
import { elastic as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
// eslint-disable-next-line
import './styles/hamburger.css'

class Hamburger extends Component {
  render() {
    return (
      <Menu isOpen={false}>
        <NavLink
          exact
          id="home"
          className="bm-link hvr-grow"
          activeClassName="bm-link-highlight"
          to="/">
          Home
        </NavLink>
        <NavLink
          id="login"
          className="bm-link hvr-grow"
          activeClassName="bm-link-highlight"
          to="/login">
          Login
        </NavLink>
        <NavLink
          id="logout"
          className="bm-link hvr-grow"
          activeClassName="bm-link-highlight"
          to="/logout">
          Logout
        </NavLink>
      </Menu>
    )
  }
}

export default Hamburger
