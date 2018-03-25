import axios from "axios";

//API_KEY PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I
const GOOGLE_VISION_API_URL =
  "https://vision.googleapis.com/v1/images:annotate?key=PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I";
export function sendImage(content, options) {
  const payload = {
    requests: [
      {
        image: { content },
        features: [options.features]
      }
    ]
  };
  return ax.post(GOOGLE_VISION_API_URL, payload);
}
