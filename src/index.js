import React from 'react';
import ReactDOM from 'react-dom';
import './style/ChatApp.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import ChatApp from './components/ChatApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatApp />, document.getElementById('root'));
registerServiceWorker();
