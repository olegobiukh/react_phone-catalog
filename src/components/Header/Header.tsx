import "./index.scss";

import React from "react";
import Nav from "./Nav";
import TopBar from "./TopBar";
import Burger from "./Burger";
import Cross from "./Cross";

const Header = () => {
  return (
    <>
      <header className={`header`}>
        <Cross />
        <Burger />
        <Nav />
        <TopBar />
      </header>
    </>
  );
};

export default Header;
