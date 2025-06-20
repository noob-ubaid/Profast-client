import React from "react";
import { NavLink } from "react-router";
import Logo from "../../shared/Logo";

const Header = () => {
    const links = <dic className="flex items-center gap-6 flex-col md:flex-row">
        <NavLink className={`text-lg font-medium`} to="/">Home</NavLink>
        <NavLink className={`text-lg font-medium`} to="/about">About Us</NavLink>
    </dic>
  return (
    <div className="py-4">
      <div className="navbar bg-white rounded-full py-2 px-4 md:px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <Logo/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="bg-green rounded-full px-6 py-2.5">Login</a>
      </div>
    </div>
    </div>
  );
};

export default Header;
