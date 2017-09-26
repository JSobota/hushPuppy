import React, { Component } from 'react';
import './styles/signupform.css'

class SignupForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  }

  updateFirstName (e) {
    this.setState({firstName: e.target.value})
  }

  updateLastName (e) {
    this.setState({lastName: e.target.value})
  }

  updateEmail (e) {
    this.setState({email: e.target.value})
  }

  updatePassword (e) {
    this.setState({password: e.target.value})
  }

  sendRegistration(e) {
    e.preventDefault()
  }

  render () {
    return (
      <form id="loginform" className="form">
        <input value={this.state.firstName}
               onChange={this.updateFirstName.bind(this)}
               type="text"
               className="input"
               name="firstName"
               placeholder="First Name" />

        <input value={this.state.lastName}
               onChange={this.updateLastName.bind(this)}
               type="text"
               className="input"
               name="lastName"
               placeholder="Last Name" />

        <input value={this.state.email}
               onChange={this.updateEmail.bind(this)}
               type="text"
               className="input"
               name="email"
               placeholder="Email" />

        <input value={this.state.password}
               onChange={this.updatePassword.bind(this)}
               type="password"
               className="input"
               name="password"
               placeholder="password" />

        <input type="submit" className="button hvr-grow-shadow" onClick={this.sendRegistration.bind(this)} value="Signup" />
      </form>
    )
  }
}

export default SignupForm
