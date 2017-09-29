import React, { Component } from 'react'
import axios from 'axios'
import Spinner from 'react-spinkit'
import { Redirect } from 'react-router-dom'
import './styles/loginform.css'
import './styles/spinner.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      redirect: false,
      loggedIn: false,
      loading: true
    }
  }

  loginCheck(loginStateFlag) {
    axios.get('/api/auth-check').then(res => {
      // 200 status code means we're logged in
      if (res.status === 200) {
        this.setState({loggedIn: true })
      } else {
        this.setState({loggedIn: false })
      }
    })
  }

  componentDidMount() {
    this.loginCheck('loggedIn')
    this.setState({ loading: false })
  }

  updateName(e) {
    this.setState({ name: e.target.value })
  }

  updatePassword(e) {
    this.setState({ password: e.target.value })
  }

  sendLogin(e) {
    e.preventDefault()
    const data = {
      email: this.state.name,
      password: this.state.password
    }

    this.setState({ email: '', password: '' })

    axios
      .post('/api/user', data)
      .then(res => {
        // if the response we get is a succcess that means theyre logged in, then we redirect them
        // to the dashboard
        if (res.data.success) {
          this.setState({ redirect: true })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/dashboard" />
    ) : this.state.loading ? (
      <Spinner className="spinner" fadeIn="none" name="ball-spin-fade-loader" />
    ) : this.state.loggedIn ? (
      <LoggedIn />
    ) : (
      <form id="loginform" className="form">
        <input
          type="text"
          className="input"
          value={this.state.name}
          onChange={this.updateName.bind(this)}
          name="username"
          placeholder="username"
        />
        <input
          type="password"
          className="input"
          value={this.state.password}
          onChange={this.updatePassword.bind(this)}
          name="password"
          placeholder="password"
        />
        <input
          type="submit"
          className="button"
          onClick={this.sendLogin.bind(this)}
          action="submit"
          value="Login"
        />
      </form>
    )
  }
}

function LoggedIn(props) {
  return <span>You're already logged in</span>
}

export default LoginForm
