import React from "react";
import Grid from "material-ui/Grid";
import SpeciesCard from "./SpeciesCard";
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

SpeciesGallery.defaultProps = {
  dataList: speciesImageList
};

export default SpeciesGallery;
