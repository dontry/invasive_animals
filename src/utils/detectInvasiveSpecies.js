import InvasiveSpecies from "./InvasiveSpecies";

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
  return label.includes(name);
}

const speciesArray = InvasiveSpecies.species;
export const INVASIVE_SPECIES = createSpeciesMap(speciesArray);
export const INVASIVE_SPECIES_NAMES = speciesArray.map(item => item.name);

export function getBestGuessLabels(labels) {
  let candidates = [];
  for (const name of INVASIVE_SPECIES_NAMES) {
    candidates = labels.filter(label => compare(label.desscription, name));
  }
  return candidates;
}

export function getInvasiveSpecies(data) {
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

  const uniqueSpecies = candidateNames
    .filter((value, index, array) => array.indexOf(value) === index)
    .map(name => INVASIVE_SPECIES.get(name));
  return {
    candidates: uniqueSpecies,
    info
  };
}
