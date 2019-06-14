import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import './App.css';

class Support extends Component {
    handleClick =()=>{
        // console.log('Animals are great!');
        this.props.history.push('/4')
        
      }
  render() {
    return (
        <div>
        <header>
        <h4>How well do you feel supported?</h4>
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

export default Support;