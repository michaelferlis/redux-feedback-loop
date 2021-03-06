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
    } else if (action.type === 'EMPTY'){
        return [];
    }
    return state;
}
const contentReducer = (state=[], action) => {
    if(action.type === 'ADD_CONTENT_RATING') {
        return action.payload;
    } else if (action.type === 'EMPTY'){
        return [];
    }
    return state;
}
const supportReducer = (state=[], action) => {
    if(action.type === 'ADD_SUPPORT_RATING') {
        return action.payload;
    } else if (action.type === 'EMPTY'){
        return [];
    }
    return state;
}

const commentsReducer = (state=[], action) => {
    if(action.type === 'ADD_COMMENTS') {
        return action.payload;
    } else if (action.type === 'EMPTY'){
        return [];
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        contentReducer,
        supportReducer,
        commentsReducer,
        
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
