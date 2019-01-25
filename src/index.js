import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import reducers from './store/reducers'

import { createStore } from 'redux';
import Routes from './Routes';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
)