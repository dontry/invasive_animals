import React from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import SpeciesCard from "./SpeciesCard";
import speciesList from "../../assets/species_img_url"

function createSpeciesCards(speciesArray) {
  const cards = speciesArray.map(species => (
    <Grid item xs={12} sm={6} md={4} key={species.name}>
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

SpeciesGallery.defaultProps = {
  speciesList: speciesList
};

export default SpeciesGallery;
