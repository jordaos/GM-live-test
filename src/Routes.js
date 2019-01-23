import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './view/pages/login/LoginPage';
import HomePage from './view/pages/home/HomePage';
import AboutPage from './view/pages/about/AboutPage';

export default class extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                </div>
            </Router>
        )
    }
}