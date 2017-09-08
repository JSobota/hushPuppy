import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';

function Routes () {
  return (
    <Router>
      <div className="ugly">
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

        <Route exact path="/test2" render={() => {
            return ( <Test2 coolProp="cool!" /> )
        }} />

      <Route exact path="/test3" render={() => (<Test3 nice="REALLY NICE"/>)} />
        <Route exact path="/api-tester" component={ApiTester} />
      </div>
    </Router>
  )
}

function Test1 () {
  return (<div>We are on test page #1. Plain function component</div>)
}

function Test2 (props) {
  return (<div>We are on test page #2. Function component with props. Our props are: {props.coolProp}</div>)
}

class Test3 extends Component {

  constructor (props) {
    // if you want to access props in constructor you need to call
    // super on props. If you don't you can leave this out. Rember
    // that constructor is the ONLY place we can set the initial state
    super(props)

    this.state = {
      // this will not work if we didn't call super above!
      propsGoIntoState: this.props
    }
  }
  render () {
    const ourState = this.state.propsGoIntoState.nice
    return (
      <div>
        We are on test page #3. Class component with props Props: {this.props.nice}
        Our state is: {ourState}
      </div>
    )
  }
}

class ApiTester extends Component {

  constructor () {
    super()
    // react will yell at you if you call "this" before super()
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
