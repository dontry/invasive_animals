import React, { Fragment } from "react";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import Banner from "../components/common/Banner";
import IntroGrid from "../components/Home/IntroGrid";
import Logo from "../components/Home/Logo";
import banner from "../assets/images/dandenong-ranges.jpg";
import { Fade } from "material-ui";

const BANNER_DESCRIPTION = `
 Welcome, this is a place where 
 you get help to know more about the species you found...
 Is it invasive? Let's find out...`;

const Home = () => (
  <Fragment>
    <Logo />
    <NavAppBar title={<div />} />
    <PageContainer minHeight="85%">
      <Fade in={false} enter timeout={2000}>
        <Banner imgUrl={banner} description={BANNER_DESCRIPTION} />
      </Fade>
      <IntroGrid />
    </PageContainer>
  </Fragment>
);

export default Home;
