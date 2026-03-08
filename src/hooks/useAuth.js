import React, { useContext } from "react";
import { AuthContext } from "../contexts/FakeAuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth === undefined)
    throw new Error("useAuth was used outside of AuthContext");
  return auth;
};

export default useAuth;
