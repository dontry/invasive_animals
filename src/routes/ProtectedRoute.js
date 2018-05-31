import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated = true,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
    component: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    location: PropTypes.string.isRequired
}

export default ProtectedRoute;