import React from "react";
import "./MainHeader.css";
const MainHeader = (props) => {
  // props.children is special prop that allows to render all components between <MainHeader></MainHeader> tags
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
