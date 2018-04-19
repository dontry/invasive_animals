import React, { Fragment } from "react";
import PageContainer from "../components/common/PageContainer";
import ProfileGrid from "../components/About/ProfileGrid";
import Testimonial from "../components/About/Testimonial";
import { Title } from "../components/common/Text";

const About = () => (
  <Fragment>
    <PageContainer>
      <Title variant="title" align="center">
        About Us
      </Title>
      <Testimonial />
      <ProfileGrid width="90%" />
    </PageContainer>
  </Fragment>
);

export default About;
