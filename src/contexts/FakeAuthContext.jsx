import React, { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "jack123",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action!");
  }
};

const FakeAuthContext = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const login = (username, password) => {
    if (username === FAKE_USER.name && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: username });
    } else {
      alert("Unknown username or password!");
    }
  };
  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, user, isAuthenticated, avatar: FAKE_USER.avatar }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default FakeAuthContext;
