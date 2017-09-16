import React from 'react';
import { BrowserRouter as Router,
         Route } from 'react-router-dom'
import Navbar from './Navbar'
import LoginForm from './Loginform'
import SignupForm from './SignupForm'
import Home from './Home'
import Dashboard from './Dashboard'

function Routes () {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        {/* add auth to dashboard route later*/}
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  )
}

function App () {
  return ( <Routes /> )
}

export default App;
