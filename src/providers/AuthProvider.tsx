import * as React from "react";
import { useEffect, createContext, useReducer, ReactNode } from "react";
import {
  getAuthItem,
  setAuthItem,
  clearAuthStorage,
} from "~src/features/admin/utils/authStorage";

type User = {
  _id: string;
  user: any;
  token: string;
};

type AuthState = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

type AuthContextType = AuthState & {
  dispatch: React.Dispatch<AuthAction>;
  login: (userData: User) => void;
  logout: () => void;
};

// Auth reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const userInfo = getAuthItem("userInfo");
    if (userInfo) {
      dispatch({ type: "LOGIN", payload: userInfo });
    }
  }, []);

  const login = (userData: User) => {
    setAuthItem("userInfo", userData);
    dispatch({ type: "LOGIN", payload: userData });
  };

  const logout = () => {
    clearAuthStorage();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
