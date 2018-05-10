import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Grid from "material-ui/Grid";
import { Title } from "../common/Text";
import { green, grey } from "material-ui/colors";

const TileWrapper = styled(Grid)`
  && {
    border: 1px solid #fff;
    margin: 0 !important;
    background-color: ${props => props.bgColor || grey[50]};
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    & * {
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:hover {
      background-color: #fff;
    }
    &:hover .text {
      text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
      filter: brightness(80%);
    }
    &:hover svg {
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2)) brightness(80%);
    }
  }
`;

const TileTitle = Title.extend`
  && {
    color: ${green[500]};
  }
`;

const Tile = ({ tile }) => (
  <Link to={tile.path}>
    <TileWrapper
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "100%", padding: "0 2rem" }}
    >
      <Grid item>
        <TileTitle className="text" variant="text">
          {tile.title}
        </TileTitle>
      </Grid>
      <Grid item>{tile.icon}</Grid>
      <Grid item className="text">{tile.description}</Grid>
    </TileWrapper>
  </Link>
);

Tile.defaultTypes = {
  data: PropTypes.object.isRequired
};

export default Tile;
