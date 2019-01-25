import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { USER_STORED } from '../../constants';
import { userAuthenticatedChange, repositoriesListChange } from './../../store/actions/appActions';

class LogoutComponent extends Component {

    constructor(props) {
        super(props);

        localStorage.removeItem(USER_STORED);
        this.props.userAuthenticatedChange(false);
        this.props.repositoriesListChange({});
    }

    render() {
        return (
            <Redirect to="/"/>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.loginReducer.isAuthenticated,
    repositories: state.repositoriesReducer.repositories
});

const mapDispatchToProps = {
    userAuthenticatedChange,
    repositoriesListChange
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);