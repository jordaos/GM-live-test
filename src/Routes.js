import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';

export default class extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                </div>
            </Router>
        )
    }
}