
/*
Como tenemos más de un reductor, necesitamos importar la combineReducerfunción auxiliar de Redux. 
Esta función convierte nuestros reductores en un solo reductor que podemos pasar a la createStore API
*/

import cart from "./reducer.cart.ts";
import auth from "./reducer.auth";
import products from "./reducer.products";
import errors from "./reducer.errors";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cart,
  auth,
  products,
  errors
});
export default allReducers; 


