import React, { Component } from 'react'

class MessageInput extends Component {
  constructor() {
    super()

    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button>Submit</button>
      </div>
    )
  }
}

function Messages(props) {
  const messages = props.messages.map(message => <Message {...message} />)
  return <div> {messages} </div>
}

function Message(props) {
  const name = `${props.firstName} ${props.lastName}`
  const message = props.message
  return (
    <div>
      <div> {name} </div>
      <div> {message}</div>
    </div>
  )
}

function MessageDisplay(props) {
  const messages = [
    { firstName: 'first', lastName: 'last', message: 'messagerino' }
  ]
  return (
    <div>
      <Messages messages={messages} />
      <MessageInput />
    </div>
  )
}

export default MessageDisplay
