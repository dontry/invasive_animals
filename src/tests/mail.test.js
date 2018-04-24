import { sendReportEmail } from "../utils/mail";


test("send a report email", async() => {
    const data = {
        from: "mccoy018@gmail.com",
        sender: "cat",
        to: "dcai16@student.monash.edu",
        recipient: "dog",
        location: "sydney",
        amount: "10",
        species: "unknown"
    }

    const result = await sendReportEmail(data);
    expect(result.body.Messages.length).toBeGreaterThan(0);
}) 