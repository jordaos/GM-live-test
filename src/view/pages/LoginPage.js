import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usernameChange, loginError } from './../../store/actions/appActions'

import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";
import './LoginPage.css'


class LoginPage extends Component {

    renderErrorMessage() {
        if(this.props.error !== '')
            return (
                <HelpBlock>Mensagem de erro.</HelpBlock>
            );
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.loginError("Username not found");
    }

    render() {
        return (
            <form className="form-signin">
                <FormGroup
                    validationState={this.props.error !== '' ? 'error' : null}>
                    <ControlLabel>Input with success {this.props.username}</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.props.username}
                        onChange={e => this.props.usernameChange(e.target.value)} />
                    {this.renderErrorMessage()}
                </FormGroup>

                <FormGroup>
                    <Button 
                        type="submit" 
                        bsStyle="primary" 
                        block
                        onClick={this.onSubmitForm}>Sign in</Button>
                </FormGroup>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    username: state.loginReducer.username,
    error: state.loginReducer.error
});

export default connect(mapStateToProps, {
    usernameChange,
    loginError
})(LoginPage);