
const ERROR_OCURRED = "ERROR_OCURRED";
const CLEAR_ERROR = "CLEAR_ERROR";

export function errorOcurred(error) {
    return {
      type: ERROR_OCURRED,
      message:error.message
    };
  }
  
  export function clearError() {
    return {
      type: CLEAR_ERROR,
    };
  }
  