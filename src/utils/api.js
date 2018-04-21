import ax from "axios";
import { SpeciesDB, ImageDB } from "./firebase";

//API_KEY AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I
const GOOGLE_VISION_API_URL =
  "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I";

export function sendImage(content, options) {
  const payload = {
    requests: [
      {
        image: { content: content },
        features: options.features
      }
    ]
  };
  return ax.post(GOOGLE_VISION_API_URL, payload);
}

export async function getAllSpecies() {
  const speciesRef = SpeciesDB.database().ref();
  const snap = await speciesRef.once("value");
  return snap.val();
}

export async function getAllImages() {
  const imageRef = ImageDB.database().ref();
  const snap = await imageRef.once("value");
  // const snap = imageRef.orderByValue("SpeciesID").equalTo(id).once();
  return snap.val();
}

export async function getImagesById(id) {
  const allImages = await getAllImages();
  return allImages
    .filter(item => item.SpeciesID === id)
    .map(item => item.ImageURL);
}
