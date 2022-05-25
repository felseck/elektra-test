let initialState = [];
  
  function errors(state = initialState, action) {
    
    var { data,  total } = state;
    switch (action.type) {
      case "ERROR_OCURRED":
        return [{
          code: null,
          message: action.message
        }];
      case "CLEAR_ERROR":
        return initialState;
      default:
        return state;
    }
  }
  
  export default errors;
  