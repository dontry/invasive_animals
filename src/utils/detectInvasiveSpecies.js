// import InvasiveSpecies from "./InvasiveSpecies";
import { client } from "./api";

const REGEX_CATEGORIES = /(plants*|animals*|fish)/i;
const CATEGORIES = [
  { name: "animal", regex: /animal/i },
  { name: "plant", regex: /plant/i },
  { name: "fish", regex: /fish/i }
];

function createSpeciesMap(speciesArray) {
  const speciesMap = new Map();
  for (const species of speciesArray) {
    speciesMap.set(species.name, species);
  }
  return speciesMap;
}

function processLabel(meta) {
  const labels = [];
  const annotations = meta.labelAnnotations;
  const entities = meta.webDetection.webEntities;
  labels.push(...annotations, ...entities);
  return labels.slice(10);
}

function processSimilarImages(meta) {
  const images = [];
  const partialMatchingImageUrls = meta.webDetection.partialMatchingImages.map(
    image => {
      return image.url;
    }
  );

  const visuallySimilarImageUrls = meta.webDetection.visuallySimilarImages.map(
    image => {
      return image.url;
    }
  );

  images.push(...partialMatchingImageUrls, ...visuallySimilarImageUrls);
  return images;
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

export async function getInvasiveSpecies(meta) {
  const candidateNames = [];
  const labels = processLabel(meta);
  const images = processSimilarImages(meta);

  //eliminate the possibility across different category
  const categories =
    labels
      .filter(label => REGEX_CATEGORIES.test(label.description))
      .reduce((acc, label, index, array) => {
        for (const category of CATEGORIES) {
          if (category.regex.test(label.description)) {
            return acc + category.name + (index < array.length - 1 ? "|" : "");
          }
        }
        return;
      }, "(") + ")";

  const queries =
    labels.reduce((acc, label, index, array) => {
      return acc + label.description + (index < array.length - 1 ? "|" : "");
    }, "(") + ")";
  const candidates = await client.service("species").find({
    query: {
      CommonName: {
        $regex: queries,
        $options: "i"
      },
      Category: {
        $regex: categories,
        $options: "i"
      }
    }
  });

  return {
    candidates,
    labels,
    images
  };
}
