import React from 'react';
import './styles/brand.css'
import logo from "./img/hushPuppy_Logo.png"

function Brand () {
  return (
    <div className="brand">
      <img className="logo" alt="logo" src={logo}/>
    </div>
  )
}

export default Brand
