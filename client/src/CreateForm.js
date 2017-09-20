import React, { Component } from 'react';

import './styles/createForm.css'

class CreateForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      groupName: "",
      endDate: "",
      
    }
  }

  updateGroupName (e) {
    this.setState({firstName: e.target.value})
  }

  updateEndNDate (e) {
    this.setState({lastName: e.target.value})
  }

  sendRegistration(e) {
    e.preventDefault()
    const payload = {...this.state}
    /*
      ajax.post(/api/login-thing, payload)
      .then(...)
      .catch(...)
    */
  }

  render () {
    return (
		 <form id="createGroupform" className="form">
        <input value={this.state.goupName}
               onChange={this.updateGroupName.bind(this)}
               type="text"
               className="input"
               name="groupName"
               placeholder="Group Name" />

        <input value={this.state.endDate}
               onChange={this.updateEndNDate.bind(this)}
               type="text"
               className="input"
               name="endDate"
               placeholder="End Date" />


        <input type="submit" className="button" onClick={this.sendRegistration.bind(this)} value="Create" />
      </form> 
          )
  }
}

export default CreateForm
