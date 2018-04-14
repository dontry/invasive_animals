import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Title, Paragraph } from "./Text";
import { lightGreen } from "material-ui/colors";
import Grid from "material-ui/Grid";

const BannerWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: ${props => props.padding || "1rem 1rem"};
  height: 30vh;
  min-height: 300px;
  max-height: 500px;
  width: 100%;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    margin: ${props => props.padding ? "-"+props.padding : "-1rem"};
    width: 100%;
    height: 100%;
    z-index: -10;
    background: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: ${lightGreen[500]};
    filter: blur(1px) brightness(80%);
  }
`;

const Banner = ({ heading, subheading, description, imgUrl, textColor }) => (
  <BannerWrapper imgUrl={imgUrl}>
    <Grid container direction="column" spacing={8}>
      <Grid item>
        <Title variant="display1" textColor={textColor} align="left">
          {heading}
        </Title>
      </Grid>
      {subheading && (
        <Grid item>
          <Title variant="title" textColor={textColor} align="left">
            {subheading}
          </Title>
        </Grid>
      )}
      <Grid item xs={12} sm={8}>
        <Paragraph variant="Body1" textColor={textColor}>
          {description}
        </Paragraph>
      </Grid>
    </Grid>
  </BannerWrapper>
);

Banner.PropTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string
};

Banner.defaultProps = {
  heading: "Title",
  description: "Description",
  imgUrl: "",
  textColor: "#fff"
};

export default Banner;
