import { sendReportEmail } from "../utils/mail";

export const SEND_EMAIL_REQUEST = "email/SEND_EMAIL";
export const SEND_EMAIL_SUCCESS = "email/SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_FAILURE = "email/SEND_EMAIL_FAILURE";


export function sendEmailRequest(data) {
    return {
        type: SEND_EMAIL_REQUEST,
        payload: data
    }
}



