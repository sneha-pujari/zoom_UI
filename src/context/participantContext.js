import React, { createContext, useContext, useReducer } from "react";
import { participantsInfo } from "../data/participants";
import { partReducer } from "../reducer/partReducer";

const INITIAL_STATE={
  userDetails: participantsInfo
}

const UserContext = createContext(INITIAL_STATE);

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(partReducer, INITIAL_STATE);
  const value = {
    userDetails: state.userDetails,
    dispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}