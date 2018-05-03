// import InvasiveSpecies from "./InvasiveSpecies";
import { client } from "./api";

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

export function getByName(name) {
  const items = this.filter(item => item.CommonName === name);
  return items[0];
}

let INVASIVE_SPECIES = null;
export async function getInvasiveSpecies(data) {
  const candidateNames = [];
  const info = [];
  const labels = dataPreprocessing(data);
  const queries =
    labels.reduce((acc, label, index) => {
      return acc + label.description + (index < labels.length - 1 && "|");
    }, "(") + ")";
  const candidates = await client.service("species").find({
    query: {
      CommonName: {
        $regex: queries,
        $options: "i"
      }
    }
  });

  return {
    candidates,
    info
  };
}
