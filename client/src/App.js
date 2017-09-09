import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/App.css'
import Navbar from './Navbar'

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
