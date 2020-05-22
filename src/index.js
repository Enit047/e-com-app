import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/app/App';
import {BrowserRouter as Router} from 'react-router-dom'
import {compose, createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'
import {rootReducer} from "./redux/rootReducer/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(
    app
    ,
  document.getElementById('root')
);

