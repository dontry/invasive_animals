import React, { Fragment } from "react";
import PageContainer from "../components/PageContainer";
import SpeciesGallery from "../components/SpeciesGallery";
import { INVASIVE_SPECIES } from "../utils/detectInvasiveSpecies";

const Intro = () => {
  const speciesList = [];
  for (const species of INVASIVE_SPECIES) {
    speciesList.push(species[1]);
  }
  return (
    <Fragment>
      <PageContainer>
        <section>
          <h1>Invasive species</h1>
          <p>
            An invasive species is a species occurring, as a result of human
            activities, beyond its accepted normal distribution and which
            threatens valued environmental, agricultural or other social
            resources by the damage it causes. Invasive species have a major
            impact on Australia's environment, threatening our unique
            biodiversity and reducing overall species abundance and diversity.
          </p>
        </section>
        <section>
          <h2>10 Most harmful species</h2>
          <SpeciesGallery speciesList={speciesList} />
        </section>
      </PageContainer>
    </Fragment>
  );
};

export default Intro;
