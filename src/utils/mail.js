/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
import { SG_MAIL_APIKEY } from "./credentials";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(SG_MAIL_APIKEY);

const ReportTemplate = ({
  username,
  email,
  date,
  location,
  amount,
  species,
  description
}) => `
<h2>Invasive Species Report</h2>
<h4>Reporter Name: ${username}</h4>
<h4>Reporter email: ${email}</h4>
<p>
  <ul>
    <li><em>Species:</em>${species}</li>
    <li><em>Time:</em> ${date} </li>
    <li><em>Locaiton:</em>${location}</li>
    <li><em>Amount:</em>${amount}</li>
    <li><em>Description:</em>${description}</li>
  </ul>
</p>
`;

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
export async function sendSGReportMail(data) {
  const msg = {
    to: data.to,
    from: data.from,
    subject: "Report to authority",
    text: "and easy to do anywhere, even with Node.js",
    html: ReportTemplate(data)
  };
  return await sgMail.send(msg);
}
