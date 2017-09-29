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
      redirect: false,
      loggedIn: false,
      loading: true
    }
  }

  loginCheck() {
    axios.get('/api/auth-check').then(res => {
      // 200 status code means we're logged in
      if (res.status === 200) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
    this.setState({ loading: false })
  }

  componentDidMount() {
    this.loginCheck()
  }

  render() {
    return (
      <LoadingSpinner
        loading={this.state.loading}
        showWhenDone={<Form />}
        />
    )
  }
}

function LoadingSpinner(props) {
  return props.loading ? (
    <Spinner name="ball-spin-fade-loader" fadeIn="none" className="spinner" />
  ) : (
    props.showWhenDone
  )
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }

  sendLogin(e) {
    e.preventDefault()
    const data = {
      email: this.state.name,
      password: this.state.password
    }

    axios
      .post('/api/user', data)
      .then(res => {
        if (res.data.success) {
          this.setState({ redirect: true })
        }
      })
      .catch(err => console.log(err))
  }

  updateName(e) {
    this.setState({ name: e.target.value })
  }

  updatePassword(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
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

function AlreadyLoggedIn(props) {
  return <div> You are already logged in </div>
}

export default LoginForm
