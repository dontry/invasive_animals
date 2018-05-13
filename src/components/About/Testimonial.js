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
      <Title
        variant="display1"
        gutterBottom
        text-color={grey[700]}
        font_weight="bolder"
      >
        Our Mission
      </Title>
      <Title variant="title" gutterBottom text_color={grey[700]}>
        Protect Victoria from invasive species
      </Title>
      <Paragraph
        variant="subheading"
        text_color={grey[600]}
        align="justify"
        line_height="2em"
      >
        <h2>Who we are</h2>
        Victoria Guardian was formed in 2018. It aims to develop a web platform
        that assists local Victorian farmers and researchers to manage the
        eminent and potential threats of invasive species. As reported by the
        goverment of Victora, invasive species has been costing the state more
        than $900 million per year. Preventing any threat at an early stage - to
        alert and notify people about a possible attack - is the most economical
        solution.
        <br />
        <br />
        <h2>What we do</h2>
        Victoria Guardian offers a wide range of features to address the
        invasive species issues. With the use of image recognition technology,
        it helps farmers to identify whether the species that they found are
        invasive or not by uploading images to the website. Additional features
        to serve the needs of farmer users such as reporting species, finding
        help centre and searching species are also offered. To support
        researchers, we also provide the occurrence distribution map along with
        predictive analysis to envisage future occurrence based on time series.
        <br />
        <br />
        <h2>What benefits we bring</h2>
        The successful implementation of this project will bring massive
        benefits to Victoria society in various aspects including preventing
        crops from being destroyed, keep biodiversity safe, and preserving local
        ecosystem. Furthermore, the project also tries to shed a light into
        starting a new industry and calling for investments into invasive
        species solutions.
      </Paragraph>
    </Wrapper>
    {/* <Wrapper>
      <Title variant="display1" gutterBottom text_color={grey[700]}>
        About Us
      </Title>
      <Paragraph
        variant="subheading"
        text_color={grey[600]}
        align="justify"
        line_height="1.5em"
      >
        In 2018, Monash University calls for its final year students to come
        together as one to find solutions to make the world a better place. We
        are G4 - a team of final years students from Monash Information
        Technology. We are here to tackle challenges and to find solution to
        real world problems. application.
      </Paragraph>
    </Wrapper> */}
  </Fragment>
);

export default Testimonial;
