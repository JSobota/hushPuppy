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
      showScramble: false,
      isMatched: false
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
    axios.get(`/api/group/${this.groupId}/match`).then(r => {
      const matched = r.data.success
      this.setState({ isMatched: matched })
    })
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

  showScrambleButton(){
    return !this.state.isMatched && this.state.showScramble
  }

  componentDidMount() {
    this.groupId = this.props.match.params.group
    axios
      .get(`/api/group/${this.groupId}`)
      .then(res => {
        this.setState({ isMatched: res.data.isMatched })

        this.getMembers(res.data)
        this.getMessages(res.data)
      })
      .catch(err => console.log(err))

    axios
      .get(`/api/group/${this.groupId}/isAdmin`)
      .then(r => {
        if (!this.state.isMatched) {
          this.setState({ showScramble: r.data.success })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="wrapper">
        <MemberList members={this.state.members} />
        <Scramble
          onClick={this.scramble.bind(this)}
          show={this.showScrambleButton()}
          text="Scramble!"
        />
        <MessageDisplay groupId={this.groupId} messages={this.state.messages} />
      </div>
    )
  }
}

function MemberList(props) {
  const members = props.members.map(m => <Member key={m.id} {...m} />)
  return (
    <div>
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
  return props.show ? (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  ) : null
}

export default GroupPage
