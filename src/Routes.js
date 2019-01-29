import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './view/pages/login/LoginPage';
import HomePage from './view/pages/home/HomePage';
import AboutPage from './view/pages/about/AboutPage';
import LogoutComponent from './view/components/LogoutComponent';
import PrivateRoute from './view/components/PrivateRoute';

import { userAuthenticatedChange } from './store/actions/appActions'

class Routes extends Component {
    render() {
        return (
            <Router basename="/GM-live-test">
                <div>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/logout" component={LogoutComponent} />
                    <PrivateRoute path="/home" component={HomePage} authed={this.props.isAuthenticated}/>
                    <PrivateRoute path="/about" component={AboutPage} authed={this.props.isAuthenticated}/>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.loginReducer.isAuthenticated
});

const mapDispatchToProps = {
    userAuthenticatedChange
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));