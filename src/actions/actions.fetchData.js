
const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
const CLEAR_DATA = "CLEAR_DATA";

export function fetchDataRequest() {
    return {
      type: FETCH_DATA_REQUEST
    };
  }
  
  export function fetchDataSuccess(data) {
    return {
      type: FETCH_DATA_SUCCESS,
      data
    };
  }
  
  export function fetchDataError(error) {
    return {
      type: FETCH_DATA_ERROR,
      payload: { error }
    };
  }

  export function clearData() {
    return {
      type: CLEAR_DATA,
    };
  }