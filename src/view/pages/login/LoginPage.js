import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { usernameChange, loginError } from '../../../store/actions/appActions'

import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";
import './LoginPage.css'
import GitHub from './GitHub.png'
import { USER_STORED } from '../../../constants';


class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
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
                    Entrar
                </Button>
            )
        } else {
            return (
                <Button
                    type="submit"
                    bsStyle="primary"
                    block
                    disabled>
                    <i className="fa fa-circle-o-notch fa-spin"></i> Entrar
                </Button>
            )
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        
        this.setState({ isLoading: true });

        axios.get('https://api.github.com/users/' + this.props.username)
            .then(response => {
                this.props.loginError('');
                this.setState({ isLoading: false });
                localStorage.setItem(USER_STORED, JSON.stringify(response.data));
                this.props.history.push('/home');
            })
            .catch(error => {
                this.setState({ isLoading: false })
                this.props.loginError(error.response.data.message);
            });
    }

    render() {
        return (
            <div>
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
    error: state.loginReducer.error
});

const mapDispatchToProps = {
    usernameChange,
    loginError
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);