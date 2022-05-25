let initialState = {
    loading: false,
    data: [],
    total: 0,
    error: null
  };
  
  function products(state = initialState, action) {
    
    var { data,  total } = state;
    switch (action.type) {
      case "REQUEST_START":
        return {
          ...state,
          loading: true,
          error: null
        };
      case "REQUEST_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.data,
          total:action.data.length
        };
      case "REQUEST_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          data: [],
          total:0
        };
        case "CLEAR_DATA":
        return initialState;
      default:
        return state;
    }
  }
  
  export default products;
  