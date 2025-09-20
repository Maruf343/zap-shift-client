import React from "react";
import { Link, NavLink } from "react-router";
import ProFastLogo from "../proFastLogo/ProFastLogo";
import './Navbar.css'
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const {user,logOut} = useAuth()
    const navItems = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="sendParcel">Send Parcel</NavLink></li>
        <li><NavLink to="coverage">Coverage</NavLink></li>
        <li><NavLink to="about">About-us</NavLink></li>
    </>
  return (
    <div className="py-3">
      <div className="navbar bg-white navbar-radius shadow-sm">
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
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="ml-3 text-xl text-black font-extrabold"><ProFastLogo></ProFastLogo></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-black px-1">
                {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email && <p className="mr-2">{user.email}</p>
          }
          {
            user?.photoURL  && <img className="w-8 h-8 rounded-full mr-2 border" src={user.photoURL } alt="" />
          }
          {
            user ? 
            (<button className="btn btn-primary text-black  mr-4" onClick={logOut}>LogOut</button>)
            :
            (<Link className="btn btn-primary text-black  mr-4" to="/login">Login</Link>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
