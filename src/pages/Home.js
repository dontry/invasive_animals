import React, { Fragment } from "react";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import Banner from "../components/common/Banner";
import IntroGrid from "../components/Home/IntroGrid";
import Logo from "../components/Home/Logo";

const BANNER_DESCRIPTION = `
 Welcome, this is a place where 
 you get help to know more about the species you found...
 Is it invasive? Let's find out...`

const Home = () => (
  <Fragment>
    <Logo />
    <NavAppBar title={<div />} />
    <PageContainer>
      <Banner description={BANNER_DESCRIPTION} />
      <IntroGrid />
    </PageContainer>
  </Fragment>
);

export default Home;
