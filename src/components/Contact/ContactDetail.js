import React, { Fragment } from "react";
import styled from "styled-components";
//Material UI
import { green, grey, teal } from "material-ui/colors";
//Components
import { Paragraph, Title } from "../common/Text";

const ListWrapper = styled.ul`
  padding-top: 1rem;
  line-height: 1.5em;
  & li {
    margin-bottom: 2rem;
  }

  & * {
    color: ${green[50]} !important;
  }

  & li:hover {
    color: ${grey[50]} !important;
  }
`;

const ContactDetail = () => (
  <ListWrapper>
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
    <li>
      <Title variant="title" align="left" txtColor={grey[600]}>
        <i class="fas fa-map-marker" />
      </Title>
      <Paragraph
        variant="title"
        align="left"
        txtColor={grey[600]}
        lineHeight="1.5em"
      >
        K, Monash University
        <br />
        Caulfield Campus, 900
        <br />
        Dandenong Road, Caulfield
        <br />
        East, Melbourne 3145
      </Paragraph>
    </li>
  </ListWrapper>
);

export default ContactDetail;
