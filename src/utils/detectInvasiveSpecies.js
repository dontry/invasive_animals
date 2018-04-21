// import InvasiveSpecies from "./InvasiveSpecies";
import * as api from "./api";

function createSpeciesMap(speciesArray) {
  const speciesMap = new Map();
  for (const species of speciesArray) {
    speciesMap.set(species.name, species);
  }
  return speciesMap;
}

function dataPreprocessing(data) {
  const labels = [];
  const annotations = data.labelAnnotations;
  const entities = data.webDetection.webEntities;
  labels.push(...annotations, ...entities);

  return labels;
}

function compare(label, name) {
  label = label.toLowerCase();
  name = name.toLowerCase();
  return label.includes(name);
}

// const speciesArray = InvasiveSpecies.species;
// export const INVASIVE_SPECIES = createSpeciesMap(speciesArray);
// export const INVASIVE_SPECIES_NAMES = speciesArray.map(item => item.name);

export async function getBestGuessLabels(labels) {
  let candidates = [];
  const InvasiveSpecies = await api.getAllSpecies();
  const INVASIVE_SPECIES_NAMES = InvasiveSpecies.map(item => item.Species);
  for (const name of INVASIVE_SPECIES_NAMES) {
    candidates = labels.filter(label => compare(label.desscription, name));
  }
  return candidates;
}

export function getByName(name) {
  const items = this.filter(item => item.Species === name);
  return items[0];
}

let INVASIVE_SPECIES = null;
export async function getInvasiveSpecies(data) {
  INVASIVE_SPECIES = INVASIVE_SPECIES || (await api.getAllSpecies());
  const INVASIVE_SPECIES_NAMES = INVASIVE_SPECIES.map(item => item.Species);
  const candidateNames = [];
  const info = [];
  const labels = dataPreprocessing(data);
  for (const name of INVASIVE_SPECIES_NAMES) {
    const res = labels.filter(label => {
      if (label.description && compare(label.description, name)) {
        candidateNames.push(name);
        return true;
      } else {
        return false;
      }
    });
    if (res.length > 0) {
      info.push(...res);
    }
  }

  const uniqueSpecies = await candidateNames
    .filter((value, index, array) => array.indexOf(value) === index)
    .map(name => getByName.call(INVASIVE_SPECIES, name));
  return {
    candidates: uniqueSpecies,
    info
  };
}

export async function getSpeciesById(id) {
  INVASIVE_SPECIES = INVASIVE_SPECIES || (await api.getAllSpecies());
  return INVASIVE_SPECIES.filter(item => item.SpeciesID == id)[0];
}
