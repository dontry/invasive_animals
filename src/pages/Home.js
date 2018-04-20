import React, { Fragment } from "react";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import Banner from "../components/common/Banner";
import IntroGrid from "../components/Home/IntroGrid";
import WebsiteBrand from "../components/Home/WebsiteBrand";

const Home = () => (
  <Fragment>
    <WebsiteBrand />
    <NavAppBar title={<div />} />
    <PageContainer>
      <Banner />
      <IntroGrid />
    </PageContainer>
  </Fragment>
);

export default Home;
