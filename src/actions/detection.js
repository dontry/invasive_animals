import * as api from "../utils/api";
import { getInvasiveSpecies } from "../utils/detectInvasiveSpecies";
import { encodeImageFromFile } from "../utils/encodeImage";

export const REQUEST_ADD_IMAGE = "detection/REQUEST_ADD_IMAGE";
export const ADD_IMAGE_SUCCESS = "detection/ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAILURE = "detection/ADD_IMAGE_FAILURE";

export const REQUEST_FETCH_DETECTION_RESULT =
  "detection/REQUEST_DETECTION_IMAGE_RESULT";
export const FETCH_DETECTION_RESULT_SUCCESS =
  "detection/FETCH_DETECTION_RESULT_SUCCESS";
export const FETCH_DETECTION_RESULT_FAILURE =
  "detection/FETCH_DETECTION_RESULT_FAILURE";
export const RESET_DETECTION = "RESET_DETECTION";

export function requestAddImage(image) {
  return {
    type: REQUEST_ADD_IMAGE,
    payload: image
  };
}

export function addImageSuccess() {
  return {
    type: ADD_IMAGE_SUCCESS
  };
}

export function addImageFailure() {
  return {
    type: addImageFailure
  };
}

export async function fetchDetectionResult(image, options = undefined) {
  return async dispatch => {
    dispatch(requestfetchDetectionResult());
    let content;
    try {
      content = await encodeImageFromFile(image);
    } catch (error) {
      dispatch(fetchDetectionResultFailure(error));
    }
    try {
      const meta = await api.sendImage(content);
      if (api.checkImageSatefy(meta)) {
        const result = await getInvasiveSpecies(meta);
        dispatch(fetchDetectionResultSuccess(result));
      } else {
        throw `Sorry, the image may contain explicit content`;
      }
    } catch (error) {
      dispatch(fetchDetectionResultFailure(JSON.stringify(error)));
    }
  };
}

function requestfetchDetectionResult() {
  return {
    type: REQUEST_FETCH_DETECTION_RESULT
  };
}

function fetchDetectionResultSuccess(data) {
  return {
    type: FETCH_DETECTION_RESULT_SUCCESS,
    payload: data
  };
}

function fetchDetectionResultFailure(error) {
  return {
    type: FETCH_DETECTION_RESULT_FAILURE,
    payload: error
  };
}

export function resetDetection() {
  return {
    type: RESET_DETECTION
  };
}
