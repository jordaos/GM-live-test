import React from 'react';
import { Redirect } from "react-router-dom";

import { USER_STORED } from '../../constants';

const LogoutComponent = () => {
    localStorage.removeItem(USER_STORED);

    return (
        <Redirect to="/"/>
    );
}

export default LogoutComponent;