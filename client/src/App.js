import React from 'react';
import { BrowserRouter as Router,
         Route } from 'react-router-dom'
import Navbar from './Navbar'
import LoginForm from './Loginform'
function Routes () {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/login" component={LoginForm} />
      </div>
    </Router>
  )
}

function App () {
  return ( <Routes /> )
}

export default App;
