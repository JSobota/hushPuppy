import React, { Component } from 'react'
import axios from 'axios'
import MessageDisplay from './MessageDisplay.js'
import './styles/groupPage.css'

class GroupPage extends Component {
  constructor() {
    super()
    this.groupId = null
    this.state = {
      members: [],
      messages: [],
      showScramble: false
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

  scramble() {
    //axios.get(`/api/group/${this.groupId}/match`)
    alert('lol scramble')
  }

  getMessages(data) {
    // filter  messages from raw data and put in state
    // TODO: fill out when messages are done
    const messages = data.messages.map(m => ({
      message: m.message,
      firstName: m.firstName,
      lastName: m.lastName
    }))
    this.setState({ messages })
  }

  componentDidMount() {
    this.groupId = this.props.match.params.group
    axios
      .get(`/api/group/${this.groupId}`)
      .then(res => {
        this.getMembers(res.data)
        this.getMessages(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <MemberList members={this.state.members} />
        <Scramble onClick={this.scramble}/>
        <MessageDisplay groupId={this.groupId} messages={this.state.messages} />
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

function Scramble(props) {
  return (
      <button onClick={props.onClick}> Scramble </button>
  )
}

export default GroupPage
