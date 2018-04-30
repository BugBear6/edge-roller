import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css'
import ChatApp from './components/ChatApp';
import LoginApp from './componentsLogin/LoginApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={LoginApp} />
            <Route exact path="/chat" component={ChatApp} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
);

registerServiceWorker();
