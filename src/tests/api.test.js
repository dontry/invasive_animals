import * as api from "../utils/api";
import { encodeImageFromDir } from "../utils/encodeImage";
import { getInvasiveSpecies } from "../utils/detectInvasiveSpecies";

test("detect an image of a cane toad", async () => {
  const content = encodeImageFromDir(
    "../../public/assets/images/species/cane_toad.jpg"
  );
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
    const names = getInvasiveSpecies(data).candidates.map(item =>
      item.CommonName.toLowerCase()
    );

    expect(names).toContain("cane toad");
  } catch (exception) {
    console.log(exception);
  }
});
