// Import translations first!
import './i18n/translations';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './store';
import { version } from '../package.json';

console.log(`App version v${version}`);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
