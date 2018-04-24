import React, {Fragment} from "react";
import styled from "styled-components";

import {green, grey} from "material-ui/colors";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import {Paragraph, Title} from "../components/common/Text";

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

const ContactList = styled.ul`
  padding-top: 1rem;
  line-height: 1.5em;
  & li {
    margin-bottom: 2rem;
  }

  & a {
    color: ${green[900]} !important;
  }

  & li:hover {
    color: ${grey[900]} !important;
  }
`;

const ContactUs = () => (
  <Fragment>
    <NavAppBar />
    <PageContainer >
      <BreadcrumbsWithRouter />
      <Wrapper>
        <Title
          variant="display1"
          align="left"
          txtColor={green[700]}
          component="h3"
        >
          Contact Us
        </Title>
        <br />
        <Title
          variant="title"
          align="left"
          txtColor={grey[600]}
          component="h4"
          lineHeight="1.5em"
        >
          We're happy to answer any question you have.<br />Reach out to us and
          we'll get back to you as soon as possible.
        </Title>
        <ContactList>
          <li>
            <Title variant="title" align="left" txtColor={grey[600]}>
              <i className="fas fa-phone" />
            </Title>
            <Paragraph variant="title" align="left" txtColor={grey[600]}>
              <a href="tel:+61 405 959 278">+61 405 959 278</a>
            </Paragraph>
          </li>
          <li>
            <Title variant="title" align="left" txtColor={grey[600]}>
              <i className="fas fa-envelope" />
            </Title>
            <Paragraph variant="title" align="left" txtColor={grey[600]}>
              <a href="mailto:vic.invasive@gmail.com">vic.invasive@gmail.com</a>
            </Paragraph>
          </li>
          <li>
            <Title variant="title" align="left" txtColor={grey[600]}>
              <i className="fab fa-facebook-square" />
            </Title>
            <Paragraph variant="title" align="left" txtColor={grey[600]}>
              <a href="https://wwww.facebook.com/Invasive-Defender-Vic-2160207437541280">
                Victorian Guardian
              </a>
            </Paragraph>
          </li>
        </ContactList>
      </Wrapper>
    </PageContainer>
  </Fragment>
);

export default ContactUs;
