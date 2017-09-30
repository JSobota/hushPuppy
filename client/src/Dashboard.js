import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import GroupDisplay from './GroupDisplay'
import CreateForm from './CreateForm'
import axios from 'axios'
import './styles/dashboard.css'

// TODO: get user's groups if they're in one and display them

// TODO: change all instances of "search" to "join" to reflect what it
// actually does. its mostly css classes
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      groups: [],
      showCreateForm: false,
      //TODO: chnge me
      loggedIn: false
    }
  }

  loginCheck(loginStateFlag) {
    axios.get('/api/auth-check').then(res => {
      // 200 status code means we're logged in
      if (res.status === 200) {
        this.setState({ loggedIn: true })
        const id = res.data.id
        console.log(`/api/user/${id}`)
        axios
          .get(`/api/user/${id}`)
          .then(res => {
            const groups = res.data.memberships.map(group => ({
              id: group.id,
              name: group.name,
            }))

            this.setState({ groups })

            console.log(groups)
          })
          .catch(err => console.log(err))
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  componentDidMount() {
    this.loginCheck('loggedIn')
  }

  search(e) {
    e.preventDefault()
    const data = {
      inviteCode: this.state.id
    }
    axios.post('/api/group/join', data).then(res => console.log(res))
  }

  createGroup(e) {
    e.preventDefault()
  }

  handleSearchChange(e) {
    this.setState({ id: e.target.value })
  }

  handleNewButtonClick(e) {
    this.setState({ showCreateForm: true })
  }

  render() {
    return (
      <div id="dashboard" className="dashboard">
        <GroupDisplay groups={this.state.groups} />
        <div id="searchBar">
          <input
            className="searchBar"
            value={this.state.id}
            onChange={this.handleSearchChange.bind(this)}
            type="text"
            name="search"
            placeholder="Join a group..."
          />
          <input
            id="searchButton"
            type="submit"
            className="searchBtn hvr-grow-shadow"
            onClick={this.search.bind(this)}
            action="submit"
            value=""
          />
        </div>
        <h2>or</h2>
        {this.state.showCreateForm ? (
          <CreateForm />
        ) : (
          <button
            id="createButton"
            className="button hvr-grow-shadow"
            onClick={this.handleNewButtonClick.bind(this)}>
            {' '}
            New{' '}
          </button>
        )}
      </div>
    )
  }
}

export default Dashboard
