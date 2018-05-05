import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Paragraph, Title } from "./Text";
import { lightGreen } from "material-ui/colors";
import Grid from "material-ui/Grid";
import Fade from "material-ui/transitions/Fade";

const BannerWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: ${props => props.padding || "1rem 1rem"};
  height: 45vh;
  min-height: 300px;
  max-height: 500px;
  width: 100%;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    margin: ${props => (props.padding ? "-" + props.padding : "-1rem")};
    width: 100%;
    height: 100%;
    z-index: -10;
    background: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: ${lightGreen[500]};
    filter: brightness(80%);
  }
`;

const BlurbWrapper = styled(Grid)`
  && {
    padding: 2rem;
  }
`;


const Banner = ({ timeout = 0, heading, subheading, description, imgUrl, textColor }) => {
  return (
    <Fade in={true} timeout={timeout}>
      <BannerWrapper imgUrl={imgUrl}>
        <BlurbWrapper container direction="column" spacing={8}>
          <Grid item>
            <Title variant="display1" txtColor={textColor} align="left">
              {heading}
            </Title>
          </Grid>
          {subheading && (
            <Grid item>
              <Title variant="title" txtColor={textColor} align="left">
                {subheading}
              </Title>
            </Grid>
          )}
          <Grid item xs={12} sm={8}>
            <Paragraph
              variant="title"
              txtColor={textColor}
              lineHeight={"1.5em"}
            >
              {description}
            </Paragraph>
          </Grid>
        </BlurbWrapper>
      </BannerWrapper>
    </Fade>
  );
};

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string
};

Banner.defaultProps = {
  heading: "",
  description: "",
  imgUrl: "",
  textColor: "#fff"
};

export default Banner;
