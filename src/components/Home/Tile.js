import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import { Title } from "../common/Text";
import { green } from "material-ui/colors";

const TileWrapper = styled(Grid)`
  && {
    border: 1px solid #fff;
    margin: 0 !important;
    background-color: ${props => props.bgColor || "#efefef"};
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    & * {
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:hover {
      background-color: #fff;
    }
    &:hover .title {
      text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
    }
    &:hover svg {
      filter: drop-shadow(5px 2px 2px rgba(0, 0, 0, 0.5));
    }
  }
`;

const TileTitle = Title.extend`
  && {
    color: ${green[500]};
  }
`;

const Tile = ({ tile }) => (
  <TileWrapper
    container
    direction="column"
    justify="center"
    alignItems="center"
    style={{ height: "100%" }}
  >
    <Grid item>
      <TileTitle className="title" variant="title">{tile.title}</TileTitle>
    </Grid>
    <Grid item>{tile.icon}</Grid>
  </TileWrapper>
);

Tile.defaultTypes = {
  data: PropTypes.object.isRequired
};

export default Tile;
