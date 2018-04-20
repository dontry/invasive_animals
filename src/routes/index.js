import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router";
import Switch from "react-router-dom/Switch";

//Pages
import Home from "../pages/Home";
import Detection from "../pages/Detection";
import Search from "../pages/Search";
import AboutUs from "../pages/AboutUs";
import Report from "../pages/Report";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import Footer from "../components/common/Footer";

const CREDENTIAL = "fit5120";

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
    let { isAuthenticated } = this.state;
    isAuthenticated = true;
    return (
      <Fragment>
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
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/detect"
            component={Detection}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/report"
            component={Report}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            path="/find"
            component={Search}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            path="/about"
            isAuthenticated={isAuthenticated}
            component={AboutUs}
          />
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Routes;
