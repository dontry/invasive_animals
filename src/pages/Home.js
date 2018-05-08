import React, { Fragment } from "react";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import Banner from "../components/common/Banner";
import IntroGrid from "../components/Home/IntroGrid";
import Logo from "../components/Home/Logo";
import banner from "../assets/images/dandenong-ranges.jpg";

const BANNER_DESCRIPTION = `
 Welcome, this is a place where 
 you get help to know more about the species you found...
 Is it invasive? Let's find out...`;

const Home = () => (
  <Fragment>
    <Logo />
    <NavAppBar title={<div />} />
    <PageContainer minHeight="85%" maxWidth="100%">
      <Banner imgUrl={banner} description={BANNER_DESCRIPTION} timeout={3000} textColor="#fff"/>
      <IntroGrid />
    </PageContainer>
  </Fragment>
);

export default Home;
