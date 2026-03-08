import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <section className="h-screen px-8 py-7">
      <div className="flex flex-col items-center text-white gap-6">
        <h3 className="text-3xl lg:text-4xl mb-2 font-semibold">
          <Link to="/">WorldWise</Link>
        </h3>
        <div className="flex items-center bg-[rgb(61,63,68)] rounded-md overflow-hidden shadow-md">
          <NavLink
            to="/app/cities"
            className="pl-2 pr-2 py-1 text-[0.8rem] font-semibold"
          >
            CITIES
          </NavLink>
          <NavLink
            to="/app/countries"
            className="pr-2 pl-2 py-1 text-[0.8rem] font-semibold"
          >
            COUNTRIES
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default SideBar;
