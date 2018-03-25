export const ADD_IMAGE = "ADD_IMAGE";
export const ADD_IMAGE_SUCCESS = "ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAILURE = "ADD_IMAGE_FAILURE";

export const REQUEST_FETCH_IMAGE_RESULT = "REQUEST_FETCH_IMAGE_RESULT"
export const REQUEST_FETCH_IMAGE_RESULT_SUCCESS = "REQUEST_FETCH_IMAGE_RESULT_SUCCESS";
export const REQUEST_FETCH_IMAGE_RESULT_FAILURE = "REQUEST_FETCH_IMAGE_RESULT_FAILURE";
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
  }
}

export function addImageFailure() {
  return {
    type: addImageFailure 
  }
}

export function requestImageResult() {
  return {
    type: REQUEST_FETCH_IMAGE_RESULT
  }
}

export function resetImage() {
  return {
    type: RESET_IMAGE
  };
}


