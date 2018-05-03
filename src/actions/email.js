import { sendSGReportMail, sendSGReportMail } from "../utils/mail";

export const SEND_EMAIL_REQUEST = "email/SEND_EMAIL";
export const SEND_EMAIL_SUCCESS = "email/SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_FAILURE = "email/SEND_EMAIL_FAILURE";
export const RESET_EMAIL = "email/RESET_EMAIL";

export function sendEmailRequest() {
  return {
    type: SEND_EMAIL_REQUEST
  };
}

export function sendEmailFailure(error) {
  return {
    type: SEND_EMAIL_FAILURE,
    payload: error
  };
}

export function sendEmailSuccess(data) {
  return {
    type: SEND_EMAIL_SUCCESS,
    payload: data
  };
}

export async function sendEmail(email) {
  return async dispatch => {
    dispatch(requestSendEmail(email));
    let res;
    try {
      res = await sendSGReportMail(email);
    } catch (error) {
      dispatch(sendEmailFailure(error));
    }
  };
}

export function resetEmail() {
  return {
    type: RESET_EMAIL
  };
}
