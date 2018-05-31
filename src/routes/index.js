import React, { Component, Fragment } from "react";
import { Route } from "react-router";
import Switch from "react-router-dom/Switch";
import Icon from "material-ui/Icon";
import { green } from "material-ui/colors";
//Pages
import Home from "../pages/Home";
import Detection from "../pages/Detection";
import Search from "../pages/Search";
import SpeciesInfo from "../pages/SpeciesInfo";
import SpeciesWiki from "../pages/SpeciesWiki";
import Insight from "../pages/Insight";
import Report from "../pages/Report";
import HelpCenter from "../pages/HelpCenter";
import Subscribe from "../pages/Subscribe";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ComingSoon from "../pages/ComingSoon";
import Error404 from "../pages/Error404";
import Footer from "../components/common/Footer";
import ScrollToTop from "react-scroll-up";

const CREDENTIAL = "fit5120";




class Routes extends Component {
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
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/identify"
            component={Detection}
          />
          <Route
            exact
            path="/report"
            component={Report}
          />
          <Route
            path="/find"
            component={Search}
          />
          <Route
            exact
            path="/species"
            component={SpeciesWiki}
          />
          <Route
            exact
            path="/species/:id"
            component={SpeciesInfo}
          />
          <Route
            exact
            path="/insight"
            component={Insight}
          />
          <Route
            exact
            path="/help_center"
            component={HelpCenter}
          />
          <Route
            exact
            path="/subscribe"
            component={Subscribe}
          />
          <Route
            exact
            path="/about"
            component={AboutUs}
          />
          <Route
            exact
            path="/contact"
            component={ContactUs}
          />
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route path="/comingsoon" component={ComingSoon} />
          <Route component={Error404} />
        </Switch>
        <Footer />
        <ScrollToTop
          style={{
            background: green[500],
            width: 50,
            height: 50,
            borderRadius: 5
          }}
          showUnder={160}
        >
          <Icon style={{ fontSize: 50, color: "#fff" }}>arrow_upward</Icon>
        </ScrollToTop>
      </Fragment>
    );
  }
}

export default Routes;
