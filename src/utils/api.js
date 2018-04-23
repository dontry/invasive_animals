import ax from "axios";
import { SpeciesDB, ImageDB, HelpCenterDB } from "./firebase";

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
  const dbRef = SpeciesDB.database().ref();
  const snap = await dbRef.once("value");
  return snap.val();
}

export async function getAllImages() {
  const dbRef = ImageDB.database().ref();
  const snap = await dbRef.once("value");
  return snap.val();
}

export async function getImagesById(id) {
  const allImages = await getAllImages();
  return allImages
    .filter(item => item.SpeciesID === id)
    .map(item => item.ImageURL);
}

export async function getAllHelpCenters() {
  const dbRef = HelpCenterDB.database().ref();
  const snap = await dbRef.once("value");
  return snap.val();
}
