import React, { Component } from 'react';
import GroupDisplay from './GroupDisplay'
import CreateForm from './CreateForm'
import './styles/dashboard.css'

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id:"",
      groups: [],
      showCreateForm: false
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
    this.setState({id: e.target.value})
  }

  handleNewButtonClick(e) {
    this.setState({showCreateForm: true})
  }

  render() {
    return (
      <div id="dashboard" className="dashboard">
        <GroupDisplay groups={this.state.groups}/>
        <div id="searchBar">
          <input className="searchBar" value={this.state.id} onChange={this.handleSearchChange.bind(this)} type="text" name="search" placeholder="Search..." />
          <input id="searchButton" type="submit" className="searchBtn" onClick={this.search.bind(this)} action="submit" value=""/>
        </div>
        <h2>or</h2>
        { this.state.showCreateForm ? <CreateForm />
        : <button id="createButton" className="button" onClick={this.handleNewButtonClick.bind(this)}> New </button> }
      </div>
    )
  }
}

export default Dashboard
