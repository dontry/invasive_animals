import { sendReportEmail, sendSGMail } from "../utils/mail";

test("send a sendgrid email", async() => {
    const data = {
        from: "dcai16@student.monash.edu",
        sender: "cat",
        to: "mccoy018@gmail.com",
        recipient: "dog",
        location: "sydney",
        amount: "10",
        species: "unknown"
    }

    const result = await sendSGMail(data);
    expect(result.length).toBeGreaterThan(0);
}) 

// test("send a report email", async() => {
//     const data = {
//         from: "mccoy018@gmail.com",
//         sender: "cat",
//         to: "dcai16@student.monash.edu",
//         recipient: "dog",
//         location: "sydney",
//         amount: "10",
//         species: "unknown"
//     }

//     const result = await sendReportEmail(data);
//     expect(result.body.Messages.length).toBeGreaterThan(0);
// }) 