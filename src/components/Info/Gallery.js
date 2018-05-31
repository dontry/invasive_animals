import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
//Material UI
import GridList, { GridListTile } from "material-ui/GridList";
import { grey } from "material-ui/colors";
//Components
import SlickSlider from "react-slick";
import ImagePlaceholder from "../../assets/images/placeholder.png";
import "./slide.css";

const GalleryWrapper = styled.div`
  width: ${props => props.width || "100%"};
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: ${grey[200]};
  cursor: pointer;
`;

const SlideWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
`;

const SlideImage = styled.img`
  && {
    height: 200px;
    padding: 0.5rem;
  }
`;

const StyledGridList = styled(GridList)`
  && {
    flex-wrap: nowrap;
    transform: translateZ(0);
  }
`;

//Use slick js instead....
const Gallery = ({ images, handleClick }) => {
  return (
    <GalleryWrapper>
      <StyledGridList cols={2.5}>
        {images.map((img, index) => (
          <GridListTile key={index} onClick={handleClick}>
            <img src={img || ImagePlaceholder} alt="gallery-img" data-index={index} />
          </GridListTile>
        ))}
      </StyledGridList>
    </GalleryWrapper>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func
};

Gallery.defaultProps = {
  images: ["", "", ""],
  handleClick() {
    console.log("handle click");
  }
};

export const Slider = ({ images = [], handleClick }) => {
  const slideNumber = window.innerWidth < 400 ?  1 : 3;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slideNumber,
    slidesToScroll: 1
  };
  return (
    <SlideWrapper>
      <SlickSlider {...settings}>
        {images.map((img, index) => (
          <SlideImage
            src={img || ImagePlaceholder}
            data-index={index}
            onClick={handleClick}
            key={`image-${index}`}
          />
        ))}
      </SlickSlider>
    </SlideWrapper>
  );
};

Slider.propTypes = {
  images: PropTypes.array,
  handleClick: PropTypes.func
}

Slider.defaultProps = {
  images: ["", "", ""],
  handleClick() {
    console.log("handle click");
  }
};

export default Gallery;
