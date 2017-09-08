import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      numbers: []
    }
  }

  componentDidMount () {
    axios.get('/api/test')
      .then(res => {
        this.setState({numbers: res.data.numbers})
      })
  }

  render() {
    const numbers = this.state.numbers
    const showNumbers = numbers.map(n => (<div key={n.toString()}>{ n }</div>))

    return (
      <div>
        {showNumbers}
        <p> If this shows "one two three four" everything is setup properly</p>
      </div>
    );
  }
}

export default App;
