import {
  REQUEST_ADD_IMAGE,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_FAILURE,
  REQUEST_FETCH_DETECTION_RESULT,
  FETCH_DETECTION_RESULT_SUCCESS,
  FETCH_DETECTION_RESULT_FAILURE,
  RESET_IMAGE
} from "../actions/detection";

const INITIAL_STATE = {
  uploadImage: { entity: null },
  detectionResult: { entity: null, error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case REQUEST_ADD_IMAGE:
      return {
        ...state,
        uploadImage: {
          entity: action.payload
        }
      };
    case REQUEST_FETCH_DETECTION_RESULT:
      return {
        ...state,
        detectionResult: { ...state.detectionResult, loading: true }
      };
    case FETCH_DETECTION_RESULT_SUCCESS:
      return {
        ...state,
        detectionResult: { entity: action.payload, error: null, loading: false }
      };
    case FETCH_DETECTION_RESULT_FAILURE:
      error = action.payload || { meesage: action.payload.message };
      return {
        ...state,
        detectionResult: { entity: null, error: error, loading: false }
      };
    case RESET_IMAGE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
