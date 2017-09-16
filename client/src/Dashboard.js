import React from 'react';
import React, { Component } from 'react';
import './styles/dashboard.css'

class DashboardSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id:""
    }
  }

  sendId(e) {
    e.preventDefault()
    const payload = {...this.state}
    /*
      ajax.post(/api/login-thing, payload)
      .then(...)
      .catch(...)
    */
  }

  render() {
    return (
      <div id="dashboard">
        <GroupDisplay />
        <h2>Find a Group</h2>
        <input value={this.state}type="text" name="search" placeholder="Search.." />
        <input type="submit" className="button" onClick={this.sendId.bind(this)} action="submit" value ="Search"/>
        <h2>or</h2>
        <input type="submit" className="button" onClick={this.create.bind(this)} action="submit" value="Create"/>
      </div>
    )
  }
}

function GroupDisplay() {
  return (
    <div className="groupBox"></div>
  )
}

export default DashboardSearch
