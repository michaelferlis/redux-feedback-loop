import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
// import './App.css';

class ThankYou extends Component {

    state={
        feedbackArray:[],

    }

    // componentDidMount(){
    //     axios({
    //         method: 'GET',
    //         url: '/4'
    //     }).then((response)=>{
    //         console.log(response.data)
    //         this.setState({
    //             data: response.data
    //         })
    //     })
    //     // this.buildList
        
    // }
    
    handleClick =()=>{
        // console.log('Animals are great!');
        this.props.history.push('/')
        
      }
  render() {
    return (
      <div>
        <header>
        <h4>Thank You for submitting feedback</h4>
        </header>
        <button onClick={this.handleClick}>Submit More Feedback</button>
        <br/>
        <br/>
        <br/>
        <h5>Review your feedback</h5>
        <h6>Feeling: {this.props.reduxState.feelingReducer.type}</h6>
        <h6>Understanding: {this.props.reduxState.contentReducer.type}</h6>
        <h6>Support: {this.props.reduxState.supportReducer.type}</h6>
        <h6>Comments: {this.props.reduxState.commentsReducer}</h6>
        
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

  export default connect(mapReduxStateToProps)(ThankYou);

