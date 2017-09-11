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
    this.setState({name: e.target.value})
  }

  updatePassword(e) {
    this.setState({password: e.target.value})
  }

  render () {
    return (
      <form>
        <input type="text" value={this.state.name} onChange={this.updateName} name="username" />
        <input type="password" value={this.state.password} onChange={this.updatePassword} name="password" />
      </form>
    )
  }
}

export default LoginForm
