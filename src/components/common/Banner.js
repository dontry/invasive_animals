import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
//Material UI
import Grid from "material-ui/Grid";

import Slider from "react-slick";
import "./banner.css";

const StyledSlider = styled(Slider)`
`;

const BannerWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 300px;
  height: 45vh;
  width: 100%;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    margin: ${props => (props.padding ? "-" + props.padding : "-1rem")};
  }
  @media screen and (max-width: 400px) {
    & {
      height: 30vh;
    }
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
    padding-top: 1rem;
    padding-left: 2rem;
  }
`;

const Banner = ({ timeout = 0, heading, description, banners, textColor }) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <StyledSlider {...settings}>
      {banners.map((banner, index) => (
        <BannerWrapper key={`banner-${index}`}>
          <BackgroundImage src={banner.image} />
          <BlurbWrapper
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={9}>
              {banner.description}
            </Grid>
          </BlurbWrapper>
        </BannerWrapper>
      ))}
    </StyledSlider>
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
