import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import './App.css';

class Content extends Component {
    handleClick =()=>{
        // console.log('Animals are great!');
        this.props.history.push('/3')
        
      }
  render() {
    return (
        <div>
        <header>
        <h4>How well do you understand the content?</h4>
        </header>
        <input type="radio" name="option" className="nameInputs"/>
        <label className="nameInputs">1      </label>
        <input type="radio" name="option" className="nameInputs"/>
        <label className="nameInputs">2      </label>
        <input type="radio" name="option" className="nameInputs"/>
        <label className="nameInputs">3      </label>
        <input type="radio" name="option" className="nameInputs"/>
        <label className="nameInputs">4      </label>
        <input type="radio" name="option" className="nameInputs"/>
        <label className="nameInputs">5      </label>
        <br/>
        <button onClick={this.handleClick}>Next</button>
        <br/>
        <br/>
        <br/>
        <h5>Review your feedback</h5>
        <h6>Feeling:</h6>
        <h6>Understanding:</h6>
        <h6>Support:</h6>
        <h6>Comments:</h6>
      </div>
    );
  }
}

export default Content;