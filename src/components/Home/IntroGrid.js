import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
//Material UI
import GridList, { GridListTile } from "material-ui/GridList";
import { lightGreen, green } from "material-ui/colors";
import Hidden from "material-ui/Hidden";
//Components
import { BinocularsIcon, MagnifierIcon, TargetIcon } from "../common/Icons";
import { Title } from "../common/Text";
import Tile from "./Tile";

const ICON_SIZE = "64px";
const TileTitle = Title.extend`
  && {
    color: ${green[500]};
    padding: 0.5rem;
  }
`;
const introData = [
  {
    title: (
      <TileTitle className="title text" variant="title">
        Identify
      </TileTitle>
    ),

    icon: (
      <TargetIcon className="icon" color={lightGreen[500]} size={ICON_SIZE} />
    ),
    description: (
      <Hidden xsDown>
        <Title
          className="text"
          variant="subheading"
          text_color={lightGreen[700]}
        >
          Identify the invasive species <br /> by taking photos
        </Title>
      </Hidden>
    ),
    path: "/identify"
  },
  {
    title: (
      <TileTitle className="title text" variant="title">
        Find
      </TileTitle>
    ),
    icon: (
      <MagnifierIcon
        className="icon"
        color={lightGreen[500]}
        size={ICON_SIZE}
      />
    ),
    description: (
      <Hidden xsDown>
        <Title
          className="text"
          variant="subheading"
          text_color={lightGreen[700]}
        >
          Explore more about invasive species<br /> on our database
        </Title>
      </Hidden>
    ),
    path: "/find"
  },
  {
    title: (
      <TileTitle className="title text" variant="title">
        Insight
      </TileTitle>
    ),
    icon: (
      <BinocularsIcon
        className="icon"
        color={lightGreen[500]}
        size={ICON_SIZE}
      />
    ),
    description: (
      <Hidden xsDown>
        <Title
          className="text"
          variant="subheading"
          text_color={lightGreen[700]}
        >
          Analyse data & Observe predictions <br /> of invasive species in
          Australia
        </Title>
      </Hidden>
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
  if (window.innerWidth < 600) tileData = tileData.slice(0, 2);
  return (
    <GridWrapper>
      <StyledGridList cols={window.innerWidth < 600 ? 2 : 3}>
        {tileData.map((tile, index) => (
          <StyledGridListTile
            key={`${tile.title}-${index}`}
            cols={tile.cols || 1}
          >
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
