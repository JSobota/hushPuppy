import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import WithLoadingSpinner from './WithLoadingSpinner'
import './styles/loginform.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      loading: true
    }
  }

  loginCheck() {
    axios.get('/api/auth-check').then(res => {
      // 200 status code means we're logged in
      if (res.status === 200) {
        this.setState({ loggedIn: true })
      }
    })
    this.setState({ loading: false })
  }

  componentDidMount() {
    this.loginCheck()
  }

  render() {
    return <FormWithSpinner loading={this.state.loading} />
  }
}

const FormWithSpinner = WithLoadingSpinner(() => <FormWithRedirect />)

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
          this.props.redirectWhenLoggingIn()
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
          className="button hvr-grow"
          onClick={this.sendLogin.bind(this)}
          action="submit"
          value="Login"
        />
      </form>
    )
  }
}

const FormWithRedirect = withRouter(({ history }) => {
  return (
    <Form
      redirectWhenLoggingIn={() => {
        history.push('/dashboard')
      }}
    />
  )
})

function AlreadyLoggedIn(props) {
  return <div> You are already logged in </div>
}

export default LoginForm
