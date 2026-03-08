import React from "react";
import Pic from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <nav className="w-[90%] flex items-center justify-between mx-auto py-2">
      <Link to="/" className="flex items-center">
        <img src={Pic} alt="logo" className="w-20 h-15" />
        <h1 className="text-2xl text-white font-semibold">WorldWise</h1>
      </Link>
      <ul className="flex items-center gap-6">
        <li>
          <NavLink to="/product" className="text-white">
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className="text-white">
            PRICING
          </NavLink>
        </li>
        <Link
          to="/login"
          className="bg-green-500 py-2 px-4 rounded-md text-sm cursor-pointer"
        >
          LOG IN
        </Link>
      </ul>
    </nav>
  );
};

export default PageNav;
