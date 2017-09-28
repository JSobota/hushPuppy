import React, { Component } from 'react'
import GroupDisplay from './GroupDisplay'
import CreateForm from './CreateForm'
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
      loggedIn: true
    }
  }

  search(e) {
    e.preventDefault()
    //const payload = {...this.state}
    /*
      ajax.post(/api/login-thing, payload)
      .then(...)
      .catch(...)
    */
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
    if (this.state.loggedIn) {
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
}

export default Dashboard
