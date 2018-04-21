import * as api from "../utils/api";
import { encodeImageFromDir } from "../utils/encodeImage";
import { getInvasiveSpecies } from "../utils/detectInvasiveSpecies";

test("detect an image of a cane toad", async () => {
  const content = encodeImageFromDir("/public/assets/images/species/cane_toad.jpeg");
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


test("get species from firebase", async() => {
  const species = await api.getAllSpecies();
  expect(species.length).toBe(10);
})

test("get images by species id", async() => {
  const images = await api.getImagesById(1);
  expect(images.length).toBeGreaterThan(1);
})