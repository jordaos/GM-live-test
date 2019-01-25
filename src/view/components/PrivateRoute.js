import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
    )
};

export default PrivateRoute;