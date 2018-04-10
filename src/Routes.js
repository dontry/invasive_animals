import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import Switch from "react-router-dom/Switch";

//Pages
import Home from "./pages/Home";
import Participate from "./pages/Participate";
import Report from "./pages/Report";
import GetInvolved from "./pages/GetInvolved";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

const CREDENTIAL = "fit5120";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
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

class Routes extends Component {
  state = {
    isAuthenticated: false,
    password: ""
  };
  authenticate = () => {
    this.setState({ isAuthenticated: true });
  };
  handleChange = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = () => {
    if (this.state.password === CREDENTIAL) {
      this.authenticate();
      return true;
    } else {
      return false;
    }
  };
  render() {
    const { isAuthenticated } = this.state;
    return (
      <Switch>
        <Route
          path="/login"
          render={() => (
            <Login
              handleChange={this.handleChange.bind(this)}
              handleSubmit={this.handleSubmit.bind(this)}
            />
          )}
        />
        <ProtectedRoute
          path="/getinvolved"
          component={GetInvolved}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          path="/"
          component={Home}
          isAuthenticated={isAuthenticated}
        />
        <Route exact component={Error404} />
      </Switch>
    );
  }
}

export default Routes;
