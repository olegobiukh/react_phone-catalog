import "./index.scss";

import React from "react";
// import Burger from "../Burger";
// import Cross from "../Cross";

const Nav = () => {
  return (
    <>
      <nav className={`nav`}>
        {/* <Burger /> */}
        <h1 className="nav__logo">logo</h1>
        <ul className="nav__list">
          <li className="nav__item nav__item--active">home</li>
          <li className="nav__item">phones</li>
          <li className="nav__item">tablets</li>
          <li className="nav__item">accessories</li>
        </ul>
      </nav>
      <div className={`nav__wrapper`} />
    </>
  );
};

export default Nav;
