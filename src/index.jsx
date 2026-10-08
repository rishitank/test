import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './jquery-global';
import 'bootstrap-sass/assets/javascripts/bootstrap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
