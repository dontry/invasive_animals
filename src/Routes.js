import React from "react";
import { Route } from "react-router";
import Switch from "react-router-dom/Switch";

//Pages
import Home from "./pages/Home";
import Participate from "./pages/Participate";
import Error404 from "./pages/Error404";

const Routes = () => (
  <Switch>
    <Route exact path="/participate" component={Participate} />
    <Route path="/" component={Home} />
    <Route exact component={Error404} />
  </Switch>
);

export default Routes;