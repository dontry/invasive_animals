import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
//Material UI
import { lightGreen } from "material-ui/colors";
import Grid from "material-ui/Grid";
import Fade from "material-ui/transitions/Fade";

import Slider from "react-slick";
import { Paragraph, Title } from "./Text";
import "./banner.css";


const BannerWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 45vh;
  min-height: 300px;
  max-height: 500px;
  width: 100%;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    margin: ${props => (props.padding ? "-" + props.padding : "-1rem")};
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
  filter: brightness(80%);
`;

const BlurbWrapper = styled(Grid)`
  && {
    padding: 2rem;
  }
`;

const Banner = ({ timeout = 0, heading, description, banners, textColor }) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Fade in={true} timeout={timeout}>
      <Slider {...settings}>
        {banners.map(banner => (
          <BannerWrapper>
            <BackgroundImage src={banner.image} />
            <BlurbWrapper
              container direction="column" justify="center"
              alignItems="flex-start" >
              <Grid item xs={10} sm={7}>
                {banner.description}
              </Grid>
            </BlurbWrapper>
          </BannerWrapper>
        ))}
      </Slider>
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
