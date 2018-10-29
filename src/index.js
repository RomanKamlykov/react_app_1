import React from 'react';
import ReactDOM from 'react-dom';

//Include bootstrap's css 
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Include bootstrap's js
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
