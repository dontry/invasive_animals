import React, { Fragment } from "react";
import styled from "styled-components";
import { Title, Paragraph } from "../common/Text";
import { grey } from "material-ui/colors";

const Wrapper = styled.div`
  width: 60%;
  min-width: 320px;
  max-width: 600px;
  text-align: center;
  margin: 5rem auto;
`;

const Testimonial = () => (
  <Fragment>
    <Wrapper>
      <Title variant="display1" gutterBottom txtColor={grey[700]} >
        - Our Mission -
      </Title>
      <Paragraph variant="subheading" txtColor={grey[600]} align="center">
        To provide the fastest assistance against invasive species to Victorian
        farmers
      </Paragraph>
    </Wrapper>
    <Wrapper>
      <Title variant="display1" gutterBottom txtColor={grey[700]}>
        - About Us -
      </Title>
      <Paragraph variant="subheading" txtColor={grey[600]} align="center">
        We at G4 is a team of researchers who wish to lend a helping hand to the
        Victorian farmers and save our million-dollar argricultural industry. We
        are partnered with Monash University to develop and design this
        application.
      </Paragraph>
    </Wrapper>
  </Fragment>
);

export default Testimonial;
