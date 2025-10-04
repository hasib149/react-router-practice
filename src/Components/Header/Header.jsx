import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-center text-4xl ">This is header</h2>
      <nav className="space-x-3.5 text-black text-3xl">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
      </nav>
    </div>
  );
};

export default Header;
