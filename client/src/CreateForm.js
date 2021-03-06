import React, { Component } from 'react'
import './styles/createForm.css'
import axios from 'axios'
class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groupName: '',
      inviteCode: ''
    }
  }

  updateGroupName(e) {
    this.setState({ groupName: e.target.value })
  }

  updateInviteCode(e) {
    this.setState({ inviteCode: e.target.value })
  }

  createEvent(e) {
    e.preventDefault()
    const data = {
      name: this.state.groupName,
      inviteCode: this.state.inviteCode
    }
    axios
      .post('/api/group', data)
      .then(res => console.log(res))
      .then(() => {
        this.setState({
          groupName: '',
          inviteCode: ''
        })
      })
  }

  render() {
    return (
      <form id="createGroupform" className="form">
        <input
          value={this.state.groupName}
          onChange={this.updateGroupName.bind(this)}
          type="text"
          className="input"
          name="groupName"
          placeholder="Group Name"
        />

        <input
          value={this.state.inviteCode}
          onChange={this.updateInviteCode.bind(this)}
          type="text"
          className="input"
          name="inviteCode"
          placeholder="Invite code..."
        />

        <input
          type="submit"
          className="button"
          onClick={this.createEvent.bind(this)}
          value="Create"
        />
      </form>
    )
  }
}

export default CreateForm
