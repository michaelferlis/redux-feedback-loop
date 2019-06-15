import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
// import './App.css';

class Comments extends Component {
    state = {
        comments: '',
      }
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
        <input type="textbox" placeholder="comments?" id="commentBox" />
        <br/>
        <button onClick={this.handleClick}>Next</button>
        <br/>
        <br/>
        <br/>
        <h5>Review your feedback</h5>
        <h6>Feeling: {this.props.reduxState.feelingReducer.type}</h6>
        <h6>Understanding: {this.props.reduxState.contentReducer.type}</h6>
        <h6>Support: {this.props.reduxState.supportReducer.type}</h6>
        <h6>Comments:</h6>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

  export default connect(mapReduxStateToProps)(Comments);