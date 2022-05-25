import React, { createContext } from 'react';

export const GlobalVars = {
    API_URL: "https://gila-software-test.herokuapp.com/api"
}

export const GlobalContext = createContext(GlobalVars);