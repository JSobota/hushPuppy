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

class App extends Component {

  render() {
    return (
      <Routes />
    )
  }
}

export default App;
