import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GridList, { GridListTile } from "material-ui/GridList";
import ImgPlaceholder from "../../assets/images/placeholder.png";
import Tile from "./Tile";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: ${props => props.bgColor || "#efefef"};
`;
const StyledGridList = styled(GridList)`
  && {
    width: 100%;
    height: ${props => props.gridHeight || "40vh"};
  }
`;

const StyledGridListTile = styled(GridListTile)`
  && {
    padding: ${props => props.padding || 0} !important;
    height: 100% !important;
  }
`;

const IntroGrid = ({ tileData }) => {
  return (
    <GridWrapper>
      <StyledGridList cols={3}>
        {tileData.map(tile => (
          <StyledGridListTile key={tile.title} cols={tile.cols || 1}>
            <Tile tile={tile} />
          </StyledGridListTile>
        ))}
      </StyledGridList>
    </GridWrapper>
  );
};

IntroGrid.propTypes = {
  tileData: PropTypes.array.isRequired
};

export default IntroGrid;
