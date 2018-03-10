import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default ({ name }) => <h1>Welcome to {name}!</h1>;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
