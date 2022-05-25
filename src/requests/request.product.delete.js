import axios from "axios";
import { requestStart, requestSuccess, requestError } from "../actions/actions.requests";
import { getProducts } from "../requests/request.products.get";
import { errorOcurred, clearError } from "../actions/actions.errors";

export function deleteProduct(id) {

  if (!window.confirm('¿Desea eliminar este producto?')) return;

  return dispatch => {
    dispatch(clearError());
    dispatch(requestStart());
    axios
      .delete(
        `https://gila-software-test.herokuapp.com/api/products/${id}`
      )
      .then(response => {
        dispatch(getProducts());
      })
      .catch(error => {
        dispatch(errorOcurred(error));
      });
  };
}