import React, { Component } from 'react';

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      payload: null,
      name: "",
      password: ""
    }
  }

  updateName(e) {
    e.preventDefault()
    this.setState({name: e.target.value})
  }

  updatePassword(e) {
    e.preventDefault()
    this.setState({password: e.target.value})
  }

  render () {
    return (
      <form id="loginform">
        <input type="text" value={this.state.name} onSubmit={this.updateName} name="username" />
        <input type="password" value={this.state.password} onSubmit={this.updatePassword} name="password" />
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default LoginForm
