import * as React from "react";
import { createContext, useReducer } from "react";
import { useEffect } from "react";

export const AuthContext = createContext<any>(null);

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
    if (userInfo) {
      dispatch({ type: "LOGIN", payload: userInfo });
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
