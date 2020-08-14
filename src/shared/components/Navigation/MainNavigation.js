import React from "react";
import MainHeader from "./MainHeader";

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h2 className="main-navigation__title">Places</h2>
    </MainHeader>
  );
};

export default MainNavigation;
