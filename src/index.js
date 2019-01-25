import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import './index.css';
import reducers from './store/reducers';
import rootSaga from './store/sagas';

import Routes from './Routes';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, 
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
)