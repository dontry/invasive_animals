/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
import mailjet from "node-mailjet";
import { MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE } from "./credentials";

mailjet.connect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);

const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "dcai16@student.monash.edu",
        Name: "VicInvasiveSpecies"
      },
      To: [
        {
          Email: "passenger1@example.com",
          Name: "passenger 1"
        }
      ],
      TemplateID: 363054,
      TemplateLanguage: true,
      Subject: "Invasive species report",
      Variables: {}
    }
  ]
});
request
  .then(result => {
    console.log(result.body);
  })
  .catch(err => {
    console.log(err.statusCode);
  });
