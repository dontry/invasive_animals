import React, { Fragment } from "react";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import Banner from "../components/common/Banner";
import IntroGrid from "../components/Home/IntroGrid";
import FeatureGrid from "../components/Home/FeatureGrid";
import Logo from "../components/Home/Logo";
import { Paragraph } from "../components/common/Text";
import banner1 from "../assets/images/banner_fox2.jpg";
import banner2 from "../assets/images/banner_frog.jpg";
import banner3 from "../assets/images/banner_crops.jpg";

const Blurb = ({ children }) => (
  <Paragraph variant="display2" text_color="#fff" line_height="1.5em">
    {children}
  </Paragraph>
);

const BANNERS = [
  {
    image: banner1,
    description: (
      <Fragment>
        <h1 style={{ lineHeight: "1.2em" }}>
          Captured unknown species on your camera?
        </h1>
        <Blurb>
          Upload the image of any species you have come across and check out
          what it is.
        </Blurb>
      </Fragment>
    )
  },
  {
    image: banner2,
    description: (
      <Fragment>
        <h1 style={{ lineHeight: "1.2em" }}>
          Find out more about invasive species.
        </h1>
        <Blurb>
          Explore our wide range of options or simply subscribe to our
          newsletter.
        </Blurb>
      </Fragment>
    )
  },

  {
    image: banner3,
    description: (
      <Fragment>
        <h1 style={{ lineHeight: "1.2em" }}>
          Does trend observation and prediction takes your fancy?
        </h1>
        <Blurb>
          Analyse and observe the different trends with our analyse function and
          peek into the past present and future.
        </Blurb>
      </Fragment>
    )
  }
];

const Home = () => (
  <Fragment>
    <Logo />
    <NavAppBar title={<div />} />
    <PageContainer min_height="85%" max_width="100%">
      <Banner banners={BANNERS} timeout={3000} textColor="#fff" />
      <IntroGrid />
      <FeatureGrid />
    </PageContainer>
  </Fragment>
);

export default Home;
