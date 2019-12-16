import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './info';
import Biology from './biology';
import type from './type';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router,Route,browserHistory} from 'react-router';
ReactDOM.render(
    <App/>,document.getElementById('root')
    );
serviceWorker.unregister();
