let initialState = {
    loading: false,
    data: [],
    total: 0,
    error: null
  };
  
  function products(state = initialState, action) {
    var foundIndex = 0;
    var foundIndexCart = 0;
    var { data,  total } = state;
    switch (action.type) {
      case "FETCH_DATA_REQUEST":
        return {
          ...state,
          loading: true,
          error: null
        };
      case "FETCH_DATA_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.data,
          total:action.data.length
        };
      case "FETCH_DATA_ERROR":
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
  