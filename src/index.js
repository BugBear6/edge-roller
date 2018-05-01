import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css'
import RoutingApp from './componentsRouting/RoutingApp';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <RoutingApp />, 
    document.getElementById('root')
);

registerServiceWorker();
