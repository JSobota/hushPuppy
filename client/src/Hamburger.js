import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
// eslint-disable-next-line
import hamburger from './styles/hamburger.css'

class Hamburger extends Component {

  constructor (props) {
    super(props)

    this.state = {
      toggleMenu: false
    }
  }

  toggleMenu (e) {
    this.setState({toggleMenu: false})
  }

  render () {
    return (
      <Menu isOpen={ this.state.toggleMenu } >
        <Link id="home" onClick={ this.toggleMenu.bind(this) } className="bm-link" to="/">Home</Link>
        <Link id="login" onClick={ this.toggleMenu.bind(this) } className="bm-link" to="/login">Login</Link>
        <Link id="about" onClick={ this.toggleMenu.bind(this) } className="bm-link" to="/about">About</Link>
      </Menu>
    )
  }
}

export default Hamburger
