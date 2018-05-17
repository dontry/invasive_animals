import React, { Fragment } from "react";
import styled from "styled-components";
//Material UI
import Grid from "material-ui/Grid";
import { green, grey, teal } from "material-ui/colors";
//Components
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import {  Title } from "../components/common/Text";
import ContactDetail from "../components/Contact/ContactDetail";
import ContactFormContainer from "../containers/ContactFormContainer";

const Wrapper = styled(Grid)`
  width: 100%;
  min-height: calc(100vh - 80px);
`;

const MainBody = styled(Grid)`
  && {
    padding-top: 1rem !important;
    padding-left: 2rem !important;
  }
`;

const SideWrapper = styled(Grid)`
  && {
    padding-top: 3rem !important;
    padding-left: 2rem !important;
    background-color: ${teal[900]};
  }
`;

const ContactUs = () => (
  
  <Fragment>
    <NavAppBar />
    <PageContainer max_width="100%">
      <Wrapper container justify="space-between">
        <Grid item xs={12} sm={8}>
          <BreadcrumbsWithRouter />
          <MainBody>
            <Title
              variant="display1"
              align="left"
              text_color={green[700]}
              component="h3"
            >
              Contact Us
            </Title>
            <br />
            <Title
              variant="title"
              align="left"
              text_color={grey[600]}
              component="h4"
              line_height="1.5em"
            >
              We're happy to answer any question you have.<br />Reach out to us
              and we'll get back to you as soon as possible.
            </Title>
            <ContactFormContainer />
          </MainBody>
        </Grid>
        <SideWrapper item xs={12} sm={4}>
          <ContactDetail />
        </SideWrapper>
      </Wrapper>
    </PageContainer>
  </Fragment>
);

export default ContactUs;
