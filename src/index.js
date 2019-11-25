import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import ErrorIndicator from "./components/wrappers/error-indicator/error-indicator";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <ErrorIndicator>
        <Router>
            <App/>
        </Router>
    </ErrorIndicator>,
document.getElementById('root'));
