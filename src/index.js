import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import appReducer from './home/index'
import HomeContainer from './home/views/homeContainer'

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
  
  const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
    }
  }

const store = createStore(appReducer, applyMiddleware(logger, crashReporter))

ReactDOM.render(
    <Provider store={store}>
        <HomeContainer />
    </Provider>,
    document.getElementById('home')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
