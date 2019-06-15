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
        const action= {type: 'ADD_SUPPORT_RATING', payload: this.state.support}
        this.props.dispatch(action)
        
      }
      one = () => {
        this.setState({
          support: {
            ...this.state.support,
            type: '1',
          },
        })
      }
      two = () => {
        this.setState({
            support: {
            ...this.state.support,
            type: '2',
          },
        })
      }
      three = () => {
        this.setState({
            support: {
            ...this.state.support,
            type: '3',
          },
        })
      }
      four = () => {
        this.setState({
            support: {
            ...this.state.support,
            type: '4',
          },
        })
      }
      five = () => {
        this.setState({
            support: {
            ...this.state.support,
            type: '5',
          },
        })
      }
  render() {
    return (
        <div>
        <header>
        <h4>How well do you feel supported?</h4>
        </header>
        <input type="radio" name="option" className="nameInputs" value="1" onClick={this.one}/>
        <label className="nameInputs">1      </label>
        <input type="radio" name="option" className="nameInputs"value="2"onClick={this.two}/>
        <label className="nameInputs">2      </label>
        <input type="radio" name="option" className="nameInputs"value="3"onClick={this.three}/>
        <label className="nameInputs">3      </label>
        <input type="radio" name="option" className="nameInputs"value="4"onClick={this.four}/>
        <label className="nameInputs">4      </label>
        <input type="radio" name="option" className="nameInputs"value="5"onClick={this.five}/>
        <label className="nameInputs">5      </label>
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

  export default connect(mapReduxStateToProps)(Support);