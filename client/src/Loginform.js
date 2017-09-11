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

  render () {
    return (
      <form>
        <input type="text" value={this.state.name} name="username" />
        <input type="password" value={this.state.password} name="password" />
      </form>
    )
  }
}

export default LoginForm
