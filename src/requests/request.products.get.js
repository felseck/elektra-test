import axios from "axios";
import { requestStart, requestSuccess, requestError } from "../actions/actions.requests";
import { errorOcurred, clearError } from "../actions/actions.errors";

export function getProducts() {

  return dispatch => {
    dispatch(clearError())
    dispatch(requestStart());
    axios
      .get(
        `https://gila-software-test.herokuapp.com/api/products`
      )
      .then(response => {
        dispatch(requestSuccess(response.data));
      })
      .catch(error => {
        dispatch(errorOcurred(error));
      });
  };
}