import React, { Component } from 'react'
import axios from 'axios'
import MessageDisplay from './MessageDisplay.js'
import './styles/groupPage.css'

class GroupPage extends Component {
  constructor() {
    super()
    this.state = {
      members: [],
      messages: []
    }
  }

  getMembers(data) {
    const members = data.members.map(m => ({
      firstname: m.firstname,
      lastname: m.lastname,
      id: m.id
    }))
    this.setState({ members })
  }

  getMessages(data) {
    // filter  messages from raw data and put in state
    // TODO: fill out when messages are done
  }

  componentDidMount() {
    const groupId = this.props.match.params.group
    axios
      .get(`/api/group/${groupId}`)
      .then(res => {
        this.getMembers(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <MemberList members={this.state.members} />
        <MessageDisplay messages={this.state.messages} />
      </div>
    )
  }
}

function MemberList(props) {
  const members = props.members.map(m => <Member key={m.id} {...m} />)
  return (
    <div className="wrapper">
      <div className="membersContainer">{members}</div>
    </div>
  )
}

function Member(props) {
  return (
    <div className="members">
      {props.firstname} {props.lastname}
    </div>
  )
}
export default GroupPage
