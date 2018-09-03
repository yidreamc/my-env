import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch('/api/v1/hello')
    .then(res => res.json())
    .then(response => console.log(response));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
