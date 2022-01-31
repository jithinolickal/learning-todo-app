import React from "react";
import { Redirect, Route } from "react-router-dom";

/**
 *
 * Private Route to make the application to be accessible only when the user is authorized.
 * User navigates to the TodoApp component when  authorized.
 */
const PrivateRoute = ({ component: Component, authorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (authorized && (localStorage.getItem("isLoggedIn") == "true")) ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
