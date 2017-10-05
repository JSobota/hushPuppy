import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import LoginForm from './Loginform'
import SignupForm from './SignupForm'
import Home from './Home'
import Dashboard from './Dashboard'
import CreateForm from './CreateForm'
import Logout from './Logout'
import GroupPage from './GroupPage'
import LoginRequired from './LoginRequired'

function Routes() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          {/* add auth to dashboard route later*/}
          <LoginRequired exact path="/dashboard" component={Dashboard} />
          <LoginRequired exact path="/new" component={CreateForm} />
          <Route exact path="/logout" component={Logout} />
          <LoginRequired exact path="/group/:group" component={GroupPage} />
        </Switch>
      </div>
    </Router>
  )
}

function App() {
  return <Routes />
}

export default App
