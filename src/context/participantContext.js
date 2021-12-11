import React, { createContext, useContext, useReducer } from "react";
import { participantsInfo } from "../data/participants";
import { partReducer } from "../reducer/partReducer";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(partReducer, participantsInfo);
  const value = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
