import React, { Component } from 'react'
import axios from 'axios'
import './styles/messagedisplay.css'

class MessageInput extends Component {
  constructor() {
    super()

    this.state = {
      message: ''
    }
  }

  updateMessage(e) {
    this.setState({ message: e.target.value })
  }

  submitMessage() {
    // TODO: make ajax request too
    const { groupId } = this.props
    const message = this.state.message
    const data = { message }
    axios
      .post(`/api/group/${groupId}/message`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    this.setState({ message: '' })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
      </div>
    )
  }
}

function Messages(props) {
  const messages = props.messages.map((message, idx) => (
    <Message key={idx} {...message} />
  ))
  return <div className="messagebox"> {messages} </div>
}

function Message(props) {
  const name = `${props.firstName} ${props.lastName}`
  const message = props.message
  return (
    <div className="message">
      <div>
        {' '}
        <span>{name} says:</span>{' '}
      </div>
      <div> {message}</div>
    </div>
  )
}

function MessageDisplay(props) {
  return (
    <div className="messagedisplay">
      <Messages messages={props.messages} />
      <MessageInput groupId={props.groupId} />
    </div>
  )
}

export default MessageDisplay
