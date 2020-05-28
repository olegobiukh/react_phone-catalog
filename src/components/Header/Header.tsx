import "./index.scss";

import React from "react";
import Nav from "./Nav";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header className={`header`}>
      <Nav />
      <TopBar />
    </header>
  );
};

export default Header;
