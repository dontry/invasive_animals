import React, { Fragment } from "react";
import styled from "styled-components";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import Carousel from "../components/common/Carousel";
import IntroGrid from "../components/Home/IntroGrid";
import FeatureGrid from "../components/Home/FeatureGrid";
import Logo from "../components/Home/Logo";
import banner1 from "../assets/images/banner_fox2.jpg";
import banner2 from "../assets/images/banner_frog.jpg";
import banner3 from "../assets/images/banner_crops.jpg";

const Heading = styled.h1`
  color: #fff;
  line-height: 1.5em;
  @media screen and (max-width: 400px) {
    & {
      font-size: 24px;
      line-height: 1.2em;
    }
  }
`;

const Blurb = styled.h2`
  color: #fff;
  line-height: 1.5em;
  font-weight: 500;
  @media screen and (max-width: 400px) {
    & {
      font-size: 16px;
      line-height: 1.2em;
    }
  }
`;

const BANNERS = [
  {
    image: banner1,
    description: (
      <Fragment>
        <Heading>Captured unknown species on your camera?</Heading>
        <Blurb>
          Upload an image of any species you have come across and check out
          what it is.
        </Blurb>
      </Fragment>
    )
  },
  {
    image: banner2,
    description: (
      <Fragment>
        <Heading>Find out more about invasive species.</Heading>
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
        <Heading>
          Does trend observation and prediction takes your fancy?
        </Heading>
        <Blurb>
          Analyse and observe the different trends with our insight function and
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
      <Carousel banners={BANNERS} timeout={3000} textColor="#fff" />
      <IntroGrid />
      <FeatureGrid />
    </PageContainer>
  </Fragment>
);

export default Home;
