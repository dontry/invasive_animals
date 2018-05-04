import { client } from "../utils/api";

export const REQUEST_SEND_EMAIL = "email/REQUEST_SEND_EMAIL";
export const SEND_EMAIL_SUCCESS = "email/SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_FAILURE = "email/SEND_EMAIL_FAILURE";
export const RESET_EMAIL = "email/RESET_EMAIL";

export function requestSendEmail() {
  return {
    type: REQUEST_SEND_EMAIL
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
    dispatch(requestSendEmail());
    try {
      const res = await client.service("reports").create(email);
      dispatch(sendEmailSuccess(res));
    } catch (error) {
      debugger
      dispatch(sendEmailFailure(error));
    }
  };
}

export function resetEmail() {
  return {
    type: RESET_EMAIL
  };
}
