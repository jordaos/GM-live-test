import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { USER_STORED } from '../../constants';
import { userAuthenticatedChange, repositoriesListChange, latLngChange } from './../../store/actions/appActions';

class LogoutComponent extends Component {

    constructor(props) {
        super(props);

        localStorage.removeItem(USER_STORED);
        this.props.userAuthenticatedChange(false);
        this.props.repositoriesListChange({});
        this.props.latLngChange({lat: 0, lng: 0});
    }

    render() {
        return (
            <Redirect to="/"/>
        );
    }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
    userAuthenticatedChange,
    repositoriesListChange,
    latLngChange
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);