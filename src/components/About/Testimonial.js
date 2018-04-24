import React, { Fragment } from "react";
import styled from "styled-components";
import { Title, Paragraph } from "../common/Text";
import { grey } from "material-ui/colors";

const Wrapper = styled.div`
  width: 80%;
  min-width: 320px;
  max-width: 800px;
  text-align: center;
  margin: 3rem auto;
`;

const Testimonial = () => (
  <Fragment>
    <Wrapper>
      <Title variant="display1" gutterBottom txtColor={grey[700]}>
        Our Mission
      </Title>
      <Paragraph
        variant="subheading"
        txtColor={grey[600]}
        align="justify"
        lineHeight="1.5em"
      >
        In 2015 - 2016, Victoria produced $13.16 billion of agriculture product,
        thus making this southeastern state the largest agricultural producer in
        Australia. However, as reported by the Government of Victoria, invasive
        species have been costing the state more than $900 million every year.
        Money is largely spent on insecticides, pesticides, fencing and
        conducting research to keep invasive species in control. Therefore,
        managing any threats at an early stage - to alert and notify them about
        a possible attack - is the most economical solution.
        <br />
        <br />
        The project aims to develop a web platform that assist local Victorian
        farmers and researchers about the possible and eminent attack of
        invasive species. With the use of image recognition technology, farmers
        have the ability to identify whether the species that they have just
        found in their farmyards are invasive or not by uploading images to the
        website. Additional features to serve the needs of farmer users such as
        reporting species, finding help centre and searching species are
        provided. To support researchers users, we provide the occurrence
        distribution map along with predictive analysis to predict future
        occurrence based on time series forecasting.
        <br />
        <br />
        Successful implementation of the project will greatly benefit the
        Victorian society in multiple aspects, for instance, helping local
        farmers to gain the right profits and to preserve Victoria ecosystems.
        Furthermore, the project also tries to shed a light into starting a new
        industry and calling for investments into invasive species solutions.
      </Paragraph>
    </Wrapper>
    <Wrapper>
      <Title variant="display1" gutterBottom txtColor={grey[700]}>
        About Us
      </Title>
      <Paragraph
        variant="subheading"
        txtColor={grey[600]}
        align="justify"
        lineHeight="1.5em"
      >
        In 2018, Monash University calls for its final year students to come
        together as one to find solutions to make the world a better place. We
        are G4 - a team of final years students from Monash Information
        Technology. We are here to tackle challenges and to find solution to
        real world problems. application.
      </Paragraph>
    </Wrapper>
  </Fragment>
);

export default Testimonial;
