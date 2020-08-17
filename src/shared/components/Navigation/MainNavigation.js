import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h2 className="main-navigation__title">
        <Link to="/">Places</Link>
      </h2>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
