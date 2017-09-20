import React, { Component } from 'react';
import axios from 'axios'
import './styles/loginform.css'

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
    const data = {
      email: this.state.name,
      password: this.state.password
    }
    axios.post('/api/user', data)
      .then(r => console.log(r))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <form id="loginform" className="form">
        <input type="text" className="input" value={this.state.name} onChange={this.updateName.bind(this)} name="username" placeholder="username" />
        <input type="password" className="input" value={this.state.password} onChange={this.updatePassword.bind(this)} name="password" placeholder="password"/>
        <input type="submit" className="button" onClick={this.sendLogin.bind(this)} action="submit" value ="Login"/>
      </form>
    )
  }
}

export default LoginForm
