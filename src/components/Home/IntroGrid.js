import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
//Material UI
import GridList, { GridListTile } from "material-ui/GridList";
import { lightGreen, green } from "material-ui/colors";
//Components
import { BinocularsIcon, MagnifierIcon, TargetIcon } from "../common/Icons";
import { Title } from "../common/Text";
import Tile from "./Tile";

const ICON_SIZE = "80px";
const TileTitle = Title.extend`
  && {
    color: ${green[500]};
  }
`;
const introData = [
  {
    title: (
      <TileTitle className="text" variant="display1">
        Identify
      </TileTitle>
    ),

    icon: <TargetIcon color={lightGreen[500]} size={ICON_SIZE} />,
    description: (
      <Title variant="subheading" txtColor={lightGreen[700]}>
        Identify the invasive species <br /> by taking photos
      </Title>
    ),
    path: "/identify"
  },
  {
    title: (
      <TileTitle className="text" variant="display1">
        Find
      </TileTitle>
    ),
    icon: <MagnifierIcon color={lightGreen[500]} size={ICON_SIZE} />,
    description: (
      <Title variant="subheading" txtColor={lightGreen[700]}>
        Explore more about invasive species<br /> on our database
      </Title>
    ),
    path: "/find"
  },
  {
    title: (
      <TileTitle className="text" variant="display1">
        Insight
      </TileTitle>
    ),
    icon: <BinocularsIcon color={lightGreen[500]} size={ICON_SIZE} />,
    description: (
      <Title variant="subheading" txtColor={lightGreen[700]}>
        Analyse data & Observe predictions <br /> of invasive species in Australia
      </Title>
    ),
    path: "/insight"
  }
];

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  height: ${props => props.gridHeight || "40vh"};
`;
const StyledGridList = styled(GridList)`
  && {
    width: 100%;
    height: 100%;
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

IntroGrid.defaultProps = {
  tileData: introData
};

export default IntroGrid;
