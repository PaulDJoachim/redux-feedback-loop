import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

const setFeedback = (state=[], action) => {
  console.log('reducer got state, payload:', state, action.payload);
  if (action.type === 'SET_FEEDBACK'){
    // combine the feedback objects from each page into a single object
    return Object.assign(action.payload, state);
  } else if (action.type === 'RESET_FEEDBACK'){
    return []
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    setFeedback,
  }),
  applyMiddleware(logger)
)



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
