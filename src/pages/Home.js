import React, { Fragment } from "react";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import Banner from "../components/common/Banner";
import IntroGrid from "../components/Home/IntroGrid";

const Home = () => (
  <Fragment>
    <NavAppBar title="Home" />
    <PageContainer>
      <Banner />
      <IntroGrid />
    </PageContainer>
  </Fragment>
);

export default Home;
