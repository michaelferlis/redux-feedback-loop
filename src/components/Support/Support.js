import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
// import './App.css';

class Support extends Component {
    state = {
        support: '',
      }
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
        <h6>Feeling: {this.props.reduxState.feelingReducer.type}</h6>
        <h6>Understanding: {this.props.reduxState.contentReducer.type}</h6>
        <h6>Support:</h6>
        <h6>Comments:</h6>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

  export default connect(mapReduxStateToProps)(Support);