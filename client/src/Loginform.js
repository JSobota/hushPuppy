import React, { Component } from 'react';

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: ""
    }
  }

  updateName (e) {
    this.setState({name: e.target.value})
  }

  updatePassword (e) {
    this.setState({password: e.target.value})
  }

  sendLogin (e) {
    e.preventDefault()
    const payload = {...this.state}
    /*
      ajax.post(/api/login-thing, payload)
        .then(...)
        .catch(...)
    */
  }

  render () {
    return (
      <form id="loginform">
        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} name="username" />
        <input type="password" value={this.state.password} onChange={this.updatePassword.bind(this)} name="password" />
        <input type="submit" onClick={this.sendLogin.bind(this)} value="Login" />
      </form>
    )
  }
}

export default LoginForm
