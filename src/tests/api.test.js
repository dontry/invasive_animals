import * as api from "../utils/api";
import { encodeImageFromDir } from "../utils/encodeImage";
import { getInvasiveSpecies } from "../utils/detectInvasiveSpecies";

test("detect an image of a cane toad", async () => {
  const content = encodeImageFromDir("./canetoad2.jpeg");
  const option = {
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
      }
    ]
  };
  try {
    const res = await api.sendImage(content, option);
    const data = res.data.responses[0];
    const labels = getInvasiveSpecies(data).map(item =>
      item.description.toLowerCase()
    );

    expect(labels).toContain("cane toad");
  } catch (exception) {
    console.log(exception);
  }
});
