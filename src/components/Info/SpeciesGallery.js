import React from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import SpeciesCard from "./Card";
import speciesImageList from "../../assets/species_img_url";

function createSpeciesCards(speciesArray) {
  const cards = speciesArray
    .sort((a, b) => (a.CommonName > b.CommonName ? 1 : -1))
    .map(species => (
      <Grid item xs={12} sm={6} md={4} key={species.CommonName}>
        <SpeciesCard species={species} />
      </Grid>
    ));
  return cards;
}

const SpeciesGallery = ({ speciesList }) => {
  const speciesCards = createSpeciesCards(speciesList);
  return (
    <Grid container justify="flex-start">
      {speciesCards}
    </Grid>
  );
};

SpeciesGallery.propTypes = {
  speciesList: PropTypes.array
}

SpeciesGallery.defaultProps = {
  speciesList: speciesImageList
};

export default SpeciesGallery;
