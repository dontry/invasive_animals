import * as api from "../utils/api";
import { getInvasiveSpecies } from "../utils/detectInvasiveSpecies";
import { encodeImageFromFile } from "../utils/encodeImage";

export const ADD_IMAGE = "ADD_IMAGE";
export const ADD_IMAGE_SUCCESS = "ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAILURE = "ADD_IMAGE_FAILURE";

export const REQUEST_FETCH_DETECTION_RESULT = "REQUEST_DETECTION_IMAGE_RESULT";
export const FETCH_DETECTION_RESULT_SUCCESS = "FETCH_DETECTION_RESULT_SUCCESS";
export const FETCH_DETECTION_RESULT_FAILURE = "FETCH_DETECTION_RESULT_FAILURE";
export const RESET_IMAGE = "RESET_IMAGE";

export function addImage(image) {
  return {
    type: ADD_IMAGE,
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

const DEFAULT_OPTIONS = {
  features: [
    {
      type: "WEB_DETECTION",
      maxResults: 20
    },
    {
      type: "TYPE_UNSPECIFIED",
      maxResults: 20
    },
    {
      type: "LABEL_DETECTION",
      maxResults: 20
    }
  ]
};
export async function fetchDetectionResult(image, options = DEFAULT_OPTIONS) {
  return async dispatch => {
    dispatch(requestfetchDetectionResult());
    let content;
    try {
      content = await encodeImageFromFile(image);
    } catch (error) {
      dispatch(fetchDetectionResultFailure(error));
    }
    try {
      const res = await api.sendImage(content, options);
      const data = res.data.responses[0];
      const result = getInvasiveSpecies(data);
      dispatch(fetchDetectionResultSuccess(result));
    } catch (error) {
      dispatch(fetchDetectionResultFailure(error));
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

export function resetImage() {
  return {
    type: RESET_IMAGE
  };
}
