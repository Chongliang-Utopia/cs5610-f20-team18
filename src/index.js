import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './components/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "font-awesome/css/font-awesome.min.css";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import App from "./App";
import reducers from "./reducers";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

ReactDOM.render(
    <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
