import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, authorized, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>{
            return authorized? <Component {...props} {...rest}/> : <Redirect to="/login"/>  
        }}/>
    );
};

export default PrivateRoute;