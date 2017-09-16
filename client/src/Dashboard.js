import React, { Component } from 'react';
import GroupDisplay from './GroupDisplay'
import './styles/dashboard.css'

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id:"",
      groups: []
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
        <GroupDisplay groups={this.state.groups}/>

        <input value={this.state.id} onChange={this.handleSearchChange.bind(this)} type="text" name="search" placeholder="Search..." />
        <input type="submit" className="button" onClick={this.search.bind(this)} action="submit" value="Search"/>
        <h2>or</h2>
        <input type="submit" className="button" onClick={this.createGroup(this)} action="submit" value="Create"/>
      </div>
    )
  }
}

export default Dashboard
