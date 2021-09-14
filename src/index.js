// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';
import { createStore } from 'redux';

const store = createStore(counterReducer)

ReactDOM.render(
    <App store={store}/>, 
    document.getElementById('root'));
