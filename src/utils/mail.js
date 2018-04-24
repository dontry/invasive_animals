/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
import { MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE } from "./credentials";
const mailjet = require("node-mailjet").connect(
  MJ_APIKEY_PUBLIC,
  MJ_APIKEY_PRIVATE
);

const reportHTML = ({ sender, time, location, amount }) => `
<h2>Invasive Species Report</h2>
<h4>Reporter: ${sender}</h4>
<p>
  <ul>
    <li> <em>Time:</em> ${time} </li>
    <li><em>Locaiton:</em>${location}</li>
    <li><em>Amount:</em>${amount}</li>
  </ul>
</p>
`;

export async function sendReportEmail(data) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "dcai16@student.monash.edu",
          Name: data.sender
        },
        To: [
          {
            Email: "mccoy018@gmail.com",
            Name: data.recipient
          }
        ],
        TemplateLanguage: true,
        Subject: "Invasive species report",
        HTMLPart: reportHTML(data),
        Variables: {}
      }
    ]
  });

  try {
    return await  request
  } catch(err) {
    return err;
  }
}
