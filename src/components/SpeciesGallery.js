import React from "react";
import Grid from "material-ui/Grid";
import SpeciesCard from "./SpeciesCard";

function createSpeciesCards(speciesArray) {
  const cards = speciesArray.map(species => (
    <Grid item xs={12} sm={6} md={4} key={species.name}>
      <SpeciesCard species={species} />
    </Grid>
  ));
  return cards;
}

const SpeciesGallery = ({ styles, speciesList }) => {
  const speciesCards = createSpeciesCards(speciesList);
  return (
    <Grid container justify="flex-start">
      {speciesCards}
    </Grid>
  );
};

export default SpeciesGallery;
