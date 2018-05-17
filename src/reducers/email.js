import {
  REQUEST_SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  RESET_EMAIL
} from "../actions/email";

const INITIAL_STATE = {
  entity: null,
  loading: false,
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SEND_EMAIL:
      return {
        ...state,
        loading: true
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        entity: action.payload,
        loading: false
      };
    case SEND_EMAIL_FAILURE:
      return {
        entity: null,
        loading: false,
        error: action.payload
      };
    case RESET_EMAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
}
