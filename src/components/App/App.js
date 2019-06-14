import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Feeling from './Components/Feeling/Feeling.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'
import About from './Components/About/About.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
  <Route path="/" exact={true} component={Feeling} />
  
  <Route path="/2" component={Content} />

  <Route path="/3" component={Support} />

  <Route path="/4" component={Comments} />

  <Route path="/5" component={ThankYou} />
      </div>
      </Router>
    );
  }
}

export default App;

