import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './styles/loginform.css'
import Spinner from 'react-spinkit'
class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: "",
      redirect: false,
      loggedIn: false,
      loading: true
    }
  }

  componentDidMount() {
    axios.get('/api/auth-check')
      .then(res => {
        // 200 status code means we're logged in
        if (res.status === 200 ) {
          this.setState({loggedIn: true})
        } else {
          this.setState({loggedIn: false})
        }
        this.setState({loading: false })
      })
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
      .then(res => {
        // if the response we get is a succcess that means theyre logged in, then we redirect them
        // to the dashboard
        if (res.data.success) {
          this.setState({redirect: true})
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    const state = this.state
    // kind of ugly hack
    return (
      <Form {...state}
            updateName={this.updateName.bind(this)}
            updatePassword={this.updatePassword.bind(this)}
            sendLogin={this.sendLogin.bind(this)}
            />
    )
  }
}

function LoadingOrForm(args) {

}

function LoadingSpinner(props) {
  return (
    props.loading ? <Spinner name='cube-grid' /> : null
  )
}

function Form(props) {
  return (
    <form id="loginform" className="form">
      <input type="text" className="input" value={props.name} onChange={props.updateName} name="username" placeholder="username" />
      <input type="password" className="input" value={props.password} onChange={props.updatePassword} name="password" placeholder="password"/>
      <input type="submit" className="button" onClick={props.sendLogin} action="submit" value ="Login"/>
    </form>
  )
}
export default LoginForm
