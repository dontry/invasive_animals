import React, { Fragment } from "react";
import NavAppBar from "../components/NavAppBar";
import TabBar from "../components/TabBar";
import { Route } from "react-router-dom";
import Intro from './Intro';
import AboutUs from "./AboutUs";
import ContactUs from './ContactUs';

const tabLabels = [
  { path: "", name: "Introduction" },
  { path: "about", name: "About us" },
  { path: "contact", name: "Contact us" }
];

const Home = () => (
  <Fragment>
    <NavAppBar title="Home" />
    <TabBar labels={tabLabels} />
    <Route exact path="/" component={Intro}/>
    <Route exact path="/about" component={AboutUs} />
    <Route exact path="/contact" component={ContactUs} />
  </Fragment>
);

export default Home;
