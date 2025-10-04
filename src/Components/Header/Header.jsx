import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h2 className="text-center">This is header</h2>
      <nav className="space-x-3.5 text-black">
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
