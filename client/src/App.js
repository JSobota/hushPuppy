import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';

function Routes () {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/test1">Test Page 1</Link></li>
          <li><Link to="/test2">Test Page 2</Link></li>
          <li><Link to="/test3">Test Page 3</Link></li>
          <li><Link to="/api-tester">See if the api works</Link></li>
        </ul>

        { /* THIS IS HOW REACT DOES COMMENTS
           *
           * Route components (below) are basically
           * "replaced" by mounting the component specified in the
           * component prop when you visit the route specified in the
           * path prop */ }

        <Route exact path="/test1" component={Test1} />
        <Route exact path="/test2" component={Test2} />
        <Route exact path="/test3" component={Test3} />
        <Route exact path="/api-tester" component={ApiTester} />
      </div>
    </Router>
  )
}

function Test1 () {
  return (<div>We are on test page #1</div>)
}

function Test2 () {
  return (<div>We are on test page #2</div>)
}

function Test3 () {
  return (<div>We are on test page #3</div>)
}

class ApiTester extends Component {

  constructor (props) {
    super(props)

    this.state = {
      numbersFromApi: []
    }
  }

  componentWillMount () {
    axios.get('/api/test')
      .then(res => this.setState({numbersFromApi: res.data.numbers}))
  }

  render () {
    const numbers = this.state.numbersFromApi
    const showNumbers = numbers.map(num => (<li key={num}>{ num }</li>) )
    return (
      <div>
        <p> If you see "one two three four" we're good! </p>
        <ul>
          {showNumbers}
        </ul>
      </div>)
  }
}

function App () {

  return ( <Routes /> )
}

export default App;
