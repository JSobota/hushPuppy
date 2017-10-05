import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import Spinner from 'react-spinkit'
import axios from 'axios'

function authCheck() {
  return axios.get('/api/auth-check').then(r => {
    if (r.status === 200) {
      return true
    } else {
      return false
    }
  })
}

class LoginRequired extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      authed: null,
      redirect: false
    }
  }

  isAuthenticated() {
    //return true
    authCheck().then(authcheck => {
      this.setState({ loading: false, authed: authcheck, redirect: !authcheck })
    })
  }

  componentDidMount() {
    this.isAuthenticated()
  }

  render() {
    const { component } = this.props
    if (this.state.loading) {
      return <Loading />
    } else {
      return this.state.authed ? (
        <Route {...this.props} component={component} />
      ) : this.state.redirect ? (
        <Redirect to="/login" />
      ) : null
    }
  }
}

function Loading(props) {
  return (
    <Spinner name="ball-spin-fade-loader" fadeIn="none" className="spinner" />
  )
}

export default LoginRequired
