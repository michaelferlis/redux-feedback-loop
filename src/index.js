import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';



import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux'; 
import {logger} from 'redux-logger';


const feelingReducer = (state=[], action) => {
    if(action.type === 'ADD_FEELING_RATING') {
        return action.payload;
    }
    return state;
}
const contentReducer = (state=[], action) => {
    if(action.type === 'ADD_CONTENT_RATING') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        contentReducer,
        
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
