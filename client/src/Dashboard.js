import React, { Component } from 'react';
import './styles/dashboard.css'

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id:""
    }
  }

  search(e) {
    e.preventDefault()
    const payload = {...this.state}
    /*
      ajax.post(/api/login-thing, payload)
      .then(...)
      .catch(...)
    */
  }

  createGroup(e) {
    e.preventDefault
  }

  handleSearchChange(e) {
    this.setState({id: e.target.value})
  }

  render() {
    return (
      <div id="dashboard">
        <GroupDisplay />
        <h2>Find a Group</h2>
        <input value={this.state.id} onChange={this.handleSearchChange.bind(this)} type="text" name="search" placeholder="Search.." />
        <input type="submit" className="button" onClick={this.search.bind(this)} action="submit" value ="Search"/>
        <h2>or</h2>
        <input type="submit" className="button" onClick={this.createGroup(this)} action="submit" value="Create"/>
      </div>
    )
  }
}

function GroupDisplay() {
  return (
    <div className="groupBox"></div>
  )
}

export default Dashboard
