import React, { Fragment } from "react";
import NavAppBar from "../components/NavAppBar";
import TabBar from "../components/TabBar";
import { Route } from "react-router-dom";
import Report from "./Report";
import Participate from './Participate';

const tabLabels = [
  { path: "/getinvolved/participate", name: "Detect Species" },
  { path: "/getinvolved/report", name: "Report" },
];

const Home = () => (
  <Fragment>
    <NavAppBar title="Get Involved" />
    <TabBar labels={tabLabels} />
    <Route path={tabLabels[0].path} component={Participate} />
    <Route path={tabLabels[1].path} component={Report} />
  </Fragment>
);

export default Home;
