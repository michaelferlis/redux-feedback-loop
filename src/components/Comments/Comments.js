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
        const action= {type: 'ADD_COMMENTS', payload: this.state.comments}
        this.props.dispatch(action)
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: this.props.reduxState.feelingReducer.type,
                understanding: this.props.reduxState.contentReducer.type,
                support: this.props.reduxState.supportReducer.type,
                comments: this.props.reduxState.commentsReducer,
            }
          }).then( (response) => {
            console.log(response.data);
            }).catch((error) => {
                console.log('Error with post', error);
                alert('error, feedback not added');
              })
          
        
        
      }// end handleclick

      handleChange =(event) =>{
          console.log('comment working');
          this.setState({
            comments:  event.target.value,
      
            
          })
      }

      postFeeback = ()=>{
          console.log('post working');
          
      }
  render() {
    return (
        <div>
        <header>
        <h4>Do you have any comments or suggestions?</h4>
        </header>
        <textarea rows="7" cols="50" placeholder="Commments?" value={this.state.comments} onChange={this.handleChange} />
        <br/>
        <button onClick={this.handleClick}>Next</button>
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

  export default connect(mapReduxStateToProps)(Comments);