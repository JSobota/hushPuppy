import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Hamburger from './Hamburger'
import Brand from './Brand'
import './styles/App.css'
import './styles/nav.css'

function Navbar () {
  return (
    <nav className="navbar">
      <Hamburger classname="one" />
      <Brand />
    </nav>
  )
}

function Routes () {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

function App () {
  return ( <Routes /> )
}

export default App;
