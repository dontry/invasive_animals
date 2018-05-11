import React, {Fragment} from "react";
import PageContainer from "../components/common/PageContainer";
import Testimonial from "../components/About/Testimonial";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";

const AboutUs = () => (
  <Fragment>
    <NavAppBar />
    <PageContainer style={{paddingBottom: "3rem"}} >
      <BreadcrumbsWithRouter />
      <Testimonial />
    </PageContainer>
  </Fragment>
);

export default AboutUs;
