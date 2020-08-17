import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <div>
      <ul className="nav-links">
        <li>
          <NavLink to="/users" exact>
            All Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/u1/places">My places</NavLink>
        </li>
        <li>
          <NavLink to="/places/new">Add place</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
