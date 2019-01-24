import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './view/pages/login/LoginPage';
import HomePage from './view/pages/home/HomePage';
import AboutPage from './view/pages/about/AboutPage';
import LogoutComponent from './view/components/LogoutComponent';

export default class extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/logout" component={LogoutComponent} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                </div>
            </Router>
        )
    }
}