import React from 'react';
import { Link } from 'react-router-dom'
import './styles/home.css'

function Home () {
  return (
    <div className="home">
      <Link to="/login" className="button">Login</Link>
      <p> or </p>
      <Link to="/signup" className="button">Signup</Link>
    </div>
  )
}

export default Home
