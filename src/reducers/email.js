import {
  REQUEST_SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE
} from "../actions/email";

const INITIAL_STATE = {
  email: { entity: null, loading: false, error: null }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SEND_EMAIL:
      return {
        ...state,
        email: { ...state.email, loading: true }
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        email: { ...state.email, entity: action.payload, loading: false }
      };
    case SEND_EMAIL_FAILURE:
      return {
        ...state,
        email: { entity: null, loading: false, error: action.payload }
      };
    default:
      return state;
  }
}
