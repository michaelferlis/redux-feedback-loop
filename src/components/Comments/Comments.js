import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import './App.css';

class Comments extends Component {
    handleClick =()=>{
        // console.log('Animals are great!');
        this.props.history.push('/5')
        
      }
  render() {
    return (
        <div>
        <header>
        <h4>Do you have any comments or suggestions?</h4>
        </header>
        
        <button onClick={this.handleClick}>Next</button>
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

export default Comments;