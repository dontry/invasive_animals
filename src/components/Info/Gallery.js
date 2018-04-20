import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GridList, { GridListTile, GridListTileBar } from "material-ui/GridList";
import { grey } from "material-ui/colors";
import ImagePlaceholder from "../../assets/images/placeholder.png";

const GalleryWrapper = styled.div`
  && {
    width: ${props => props.width || "100%"};
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    background-color: ${grey[200]};
    cursor: pointer;
  }
`;

const StyledGridList = styled(GridList)`
  && {
    flex-wrap: nowrap;
    transform: translateZ(0);
    
  }
`;

const Gallery = ({ images, handleClick }) => {
  return (
    <GalleryWrapper>
      <StyledGridList cols={2.5}>
        {images.map((img, index) => (
          <GridListTile key={index} onClick={handleClick}>
            <img src={img || ImagePlaceholder} data-index={(index)}/>
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

export default Gallery;
