import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GridList, { GridListTile, GridListTileBar } from "material-ui/GridList";
import speciesImageList from "../../assets/species_img_url";

const StyledGridList = styled(GridList)`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    padding-top: 2rem;
    max-width: 1000px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const species = speciesImageList.slice(0, 6);
function renderTileItems(list) {
  return list.map(item => (
    <GridListTile key={item.image} style={{ max_width: 280, padding: "1rem" }}>
      <Link to={`/species/${item.name.toLowerCase().replace(" ", "_")}`}>
        <Image src={item.image} alt={item.name} />
        <GridListTileBar title={item.name} />
      </Link>
    </GridListTile>
  ));
}

const TileBarGridList = ({ dataList = species }) => {
  const tileItems = renderTileItems(dataList);
  return (
    <StyledGridList cellHeight={200} style={{ margin: "0 auto" }}>
      {tileItems}
    </StyledGridList>
  );
};

TileBarGridList.propTypes = {
  dataList: PropTypes.array.isRequired
};

TileBarGridList.defaulProps = {
  dataList: species
};

export default TileBarGridList;
