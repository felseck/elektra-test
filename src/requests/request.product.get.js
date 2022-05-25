import axios from "axios";
import { requestStart, requestSuccess, requestError } from "../actions/actions.requests";
import { errorOcurred, clearError } from "../actions/actions.errors";

export function getProduct($id) {

  return dispatch => {
    dispatch(clearError());
    dispatch(requestStart());
    axios
      .get(
        `https://gila-software-test.herokuapp.com/api/products/${id}`
      )
      .then(response => {
        dispatch(requestSuccess(response.data));
      })
      .catch(error => {
        dispatch(errorOcurred(error));
      });
  };
}