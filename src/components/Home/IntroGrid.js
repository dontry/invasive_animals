import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
//Material UI
import GridList, { GridListTile } from "material-ui/GridList";
import { lightGreen } from "material-ui/colors";
//Components
import { BinocularsIcon, MagnifierIcon, TargetIcon } from "../common/Icons";
import { Title } from "../common/Text";
import Tile from "./Tile";

const ICON_SIZE = "64px";
const introData = [
  {
    title: "Identify",
    icon: <TargetIcon color={lightGreen[500]} size={ICON_SIZE} />,
    description: (
      <Title txtColor={lightGreen[700]}>Explore many different species</Title>
    ),
    path: "/identify"
  },
  {
    title: "Find",
    icon: <MagnifierIcon color={lightGreen[500]} size={ICON_SIZE} />,
    description: (
      <Title txtColor={lightGreen[700]}>
        Learn about more species
      </Title>
    ),
    path: "/find"
  },
  {
    title: "Insight",
    icon: <BinocularsIcon color={lightGreen[500]} size={ICON_SIZE} />,
    description: (
      <Title txtColor={lightGreen[700]}>
        Analyse data & Observe predictions
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
