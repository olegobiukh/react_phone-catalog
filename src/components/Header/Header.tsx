import "./index.scss";

import React, { useState } from "react";
import { openAnimation, closeAnimation } from "./animation";
import Nav from "./Nav";
import TopBar from "./TopBar";
import Burger from "./Burger";
import Cross from "./Cross";

const Header = () => {
  const [isMenuOpen, setManuOpen] = useState(true);

  type FunctionName = () => void;
  const toggleNav: FunctionName = () => {
    setManuOpen(!isMenuOpen);
    if (isMenuOpen) {
      openAnimation();
    } else {
      closeAnimation();
    }
  };

  return (
    <>
      <header className={`header`}>
        <Cross handleToggleNav={toggleNav} />
        <Burger />
        <Nav />
        <TopBar />
      </header>
    </>
  );
};

export default Header;
