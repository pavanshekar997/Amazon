import React, { createContext, useContext, useReducer } from "react";

//prepares the datalayer
export const StateContext = createContext();
//we haver used react context API
//wrap our app and provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull the infromation from the data layer
export const useStateValue = () => useContext(StateContext);
