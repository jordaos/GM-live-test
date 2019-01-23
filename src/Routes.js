import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './view/pages/LoginPage';

export default class extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LoginPage} />
                </div>
            </Router>
        )
    }
}