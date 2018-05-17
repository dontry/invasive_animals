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
    const meta = await api.sendImage(content, option);
    const res = await getInvasiveSpecies(meta);
    const names = res.candidates.map(item => item.CommonName.toLowerCase());

    expect(names).toContain("cane toad");
  } catch (exception) {
    console.log(exception);
  }
});

test("send email", async () => {
  const image = encodeImageFromDir(
    "../../public/assets/images/species/cane_toad.jpg"
  );
  const email = {
    username: "tester",
    from: "mccoy018@gmail.com",
    to: "vic.guardian@gmail.com",
    location: "monash",
    date: "05-06-2018",
    amount: 1,
    description: "aadfadf",
    image
  };
  try {
   const res = await api.client.service("reports").create(email);
   expect(res).toBeTruthy();
  } catch(error) {
    expect(res).toBeFalsy();
  }

});
