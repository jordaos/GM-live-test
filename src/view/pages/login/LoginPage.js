import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usernameChange, loginError, userAuthenticatedChange } from '../../../store/actions/appActions'

import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";
import './LoginPage.css'
import GitHub from './GitHub.png'
import { USER_STORED } from '../../../constants';
import * as client from '../../../api';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }
    componentDidMount() {
        if(localStorage.getItem(USER_STORED)){
            this.props.userAuthenticatedChange(true);
            this.props.history.push('/home');
        }
    }

    renderErrorMessage() {
        if (this.props.error !== '')
            return (
                <HelpBlock>{this.props.error}</HelpBlock>
            );
    }

    renderSubmitButton() {
        if (!this.state.isLoading) {
            return (
                <Button
                    type="submit"
                    bsStyle="primary"
                    block
                    onClick={this.onSubmitForm}>
                    Buscar
                </Button>
            )
        } else {
            return (
                <Button
                    type="submit"
                    bsStyle="primary"
                    block
                    disabled>
                    <i className="fa fa-circle-o-notch fa-spin"></i> Buscar
                </Button>
            )
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        
        this.setState({ isLoading: true });

        client.getUserInfo(this.props.username)
            .then(response => {
                this.props.loginError('');
                this.props.usernameChange('')
                this.setState({ isLoading: false });
                localStorage.setItem(USER_STORED, JSON.stringify(response.data));
                this.props.userAuthenticatedChange(true);
                this.props.history.push('/home');
            })
            .catch(error => {
                this.setState({ isLoading: false })
                this.props.loginError(error.response.data.message);
            });
    }

    render() {
        return (
            <div className="page-form-content">
                <form className="form-signin">
                    <img src={GitHub} className="app-logo" alt="App logo" />
                    <FormGroup
                        validationState={this.props.error !== '' ? 'error' : null}>
                        <ControlLabel>GitHub Username:</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.props.username}
                            onChange={e => this.props.usernameChange(e.target.value)} />
                        {this.renderErrorMessage()}
                    </FormGroup>

                    <FormGroup>
                        {this.renderSubmitButton()}
                    </FormGroup>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.loginReducer.username,
    error: state.loginReducer.error,
    isAuthenticated: state.loginReducer.isAuthenticated
});

const mapDispatchToProps = {
    usernameChange,
    loginError,
    userAuthenticatedChange
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);