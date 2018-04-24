import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import GridList, {GridListTile, GridListTileBar} from "material-ui/GridList";
import speciesImageList from "../../assets/species_img_url";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;

const StyledGridList = styled(GridList)`
  width: 100%;
`;

const species = speciesImageList.slice(0, 6);

function renderTileItems(list) {
  return list.map(item => (
    <GridListTile key={item.image} style={{ padding: "1rem" }}>
      <img src={item.image} alt={item.name} />
      <Link to={`/species/${item.id}`}>
        <GridListTileBar title={item.name} />
      </Link>
    </GridListTile>
  ));
}

const TileBarGridList = ({ dataList = species }) => {
  const tileItems = renderTileItems(dataList);
  return <StyledGridList cellHeight={200}>{tileItems}</StyledGridList>;
};

TileBarGridList.propTypes = {
  dataList: PropTypes.array.isRequired
};

TileBarGridList.defaulProps = {
  dataList: species
};

export default TileBarGridList;
