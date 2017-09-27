import React from 'react'
import { Link } from 'react-router-dom'
import './styles/brand.css'
import logo from './img/hushPuppy_Logo.png'

function Brand() {
  return (
    <div className="brand">
      <Link to="/">
        <img className="logo" alt="logo" src={logo} />
      </Link>
    </div>
  )
}

export default Brand
