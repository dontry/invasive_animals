import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
//Material UI
import Grid from "material-ui/Grid";

import Slider from "react-slick";
import "./banner.css";

const StyledSlider = styled(Slider)`
`;

const CarouselWrapper = styled.div`
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

const Carousel = ({ timeout = 5000, banners}) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    autoplay: true,
    speed: timeout,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <StyledSlider {...settings}>
      {banners.map((banner, index) => (
        <CarouselWrapper key={`banner-${index}`}>
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
        </CarouselWrapper>
      ))}
    </StyledSlider>
  );
};

Carousel.propTypes = {
  timeout: PropTypes.number,
  banners: PropTypes.array
};


export default Carousel;
