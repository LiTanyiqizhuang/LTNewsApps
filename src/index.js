import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import appReducer from './home/index'
import HomeContainer from './home/views/homeContainer'

const store = createStore(appReducer)

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
