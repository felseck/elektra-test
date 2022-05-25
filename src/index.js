import React, { createContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/reducer.index";
import { Provider } from "react-redux";

import Router from './router';


import { GlobalVars, GlobalContext } from './contexts/context.global'

//create store
const store = createStore(
  allReducers, applyMiddleware(thunk)
);




if (document.getElementById('root')) {
  ReactDOM.render(
    <BrowserRouter>

      <Provider store={store}>
        <GlobalContext.Provider value={GlobalVars}>

          <Router />
        </GlobalContext.Provider>
      </Provider>

    </BrowserRouter>, document.getElementById('root'));
}


