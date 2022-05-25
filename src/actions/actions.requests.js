
const REQUEST_START = "REQUEST_START";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_ERROR = "REQUEST_ERROR";
const CLEAR_DATA = "CLEAR_DATA";

export function requestStart() {
    return {
      type: REQUEST_START
    };
  }
  
  export function requestSuccess(data) {
    return {
      type: REQUEST_SUCCESS,
      data
    };
  }
  
  export function requestError(error) {
    return {
      type: REQUEST_ERROR,
      payload: { error }
    };
  }

  export function clearData() {
    return {
      type: CLEAR_DATA,
    };
  }