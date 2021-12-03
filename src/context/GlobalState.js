import React, { Children, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  users: [
    { id: 1, name: "Kia" },
    { id: 2, name: "Ford" },
    { id: 3, name: "Honda" },
    { id: 4, name: "Hyundai" },
    { id: 5, name: "Tata" },
  ],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
