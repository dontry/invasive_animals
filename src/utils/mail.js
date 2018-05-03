/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
import {
  MJ_APIKEY_PUBLIC,
  MJ_APIKEY_PRIVATE,
  SG_MAIL_APIKEY
} from "./credentials";
import sgMail from "@sendgrid/mail";
const mailjet = require("node-mailjet").connect(
  MJ_APIKEY_PUBLIC,
  MJ_APIKEY_PRIVATE
);

const reportHTML = ({
  email,
  time,
  location,
  amount,
  species,
  description
}) => `
<h2>Invasive Species Report</h2>
<h4>Reporter: ${email}</h4>
<p>
  <ul>
    <li><em>Species:</em>${species}</li>
    <li> <em>Time:</em> ${time} </li>
    <li><em>Locaiton:</em>${location}</li>
    <li><em>Amount:</em>${amount}</li>
    <li><em>Description:</em>${description}</li>
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
    return await request;
  } catch (err) {
    return err;
  }
}

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
export async function sendSGReportMail(content) {
  sgMail.setApiKey(SG_MAIL_APIKEY);
  const msg = {
    to: content.email,
    from: "dcai16@student.monash.edu",
    subject: "Report to authority",
    text: "and easy to do anywhere, even with Node.js",
    html: reportHTML({ ...content, sender: "dcai16@student.monash.edu" })
  };
  return await sgMail.send(msg);
}
