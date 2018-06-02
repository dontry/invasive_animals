import axios from "axios";
import { GOOGLE_VISION_APIKEY } from "./credentials";
import feathers from "@feathersjs/client";

//API_KEY AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I
const GOOGLE_VISION_API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_VISION_APIKEY}`;

const DEFAULT_OPTIONS = {
  features: [
    {
      type: "WEB_DETECTION",
      maxResults: 20
    },
    {
      type: "TYPE_UNSPECIFIED",
      maxResults: 20
    },
    {
      type: "LABEL_DETECTION",
      maxResults: 20
    },
    {
      type: "SAFE_SEARCH_DETECTION"
    }
  ]
};

export const DEFAULT_SAFE_SEARCH_PROPERTIES = [
  "adult",
  "spoof",
  "violence",
  "racy"
];

export async function sendImage(content, options = DEFAULT_OPTIONS) {
  const payload = {
    requests: [
      {
        image: { content: content },
        features: options.features
      }
    ]
  };
  const res = await axios.post(GOOGLE_VISION_API_URL, payload);
  return res.data.responses[0];
}

//https://cloud.google.com/vision/docs/detecting-safe-search#vision-safe-search-detection-gcs-protocol
export function checkImageSatefy(meta) {
  const annotation = meta.safeSearchAnnotation;
  for (const property in annotation) {
    if (
      annotation[property] === "VERY_LIKELY" ||
      annotation[property] === "LIKELY" ||
      annotation[property] === "POSSIBLE"
    ) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line no-unused-vars
const ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3030" //Create Feathersjs RESTFUL API
    : "https://backend-dot-invasive-species-g4.appspot.com";
const instance = axios.create({ timeout: 10000 });
export const client = feathers().configure(
  feathers.rest("https://backend-dot-invasive-species-g4.appspot.com").axios(instance)
);
