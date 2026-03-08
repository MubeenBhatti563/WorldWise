import React, { useEffect } from "react";
import PageNav from "../components/PageNav";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Jack");
  const [password, setPassword] = useState("jack123");
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/app/cities");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <PageNav />
      <div className="grid place-items-center h-[70vh]">
        <div className="flex flex-col gap-4 rounded-md bg-[rgb(66,66,66)] p-10 w-125 max-w-[90%]">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-white">
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              name="email"
              placeholder="username"
              className="text-gray-900 bg-slate-100 border border-slate-100 px-4 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              className="text-gray-900 bg-slate-200 border border-slate-100 px-4 py-2 rounded-md"
            />
          </div>
          <button
            className="bg-slate-50 min-w-25 max-w-30 py-1 rounded-sm cursor-pointer text-center"
            onClick={() => login(username, password)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
