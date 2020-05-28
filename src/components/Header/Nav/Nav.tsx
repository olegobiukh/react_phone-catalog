import "./index.scss";

import React from "react";

const Nav = () => {
  return (
    <nav className={`nav`}>
      <h1 className="nav__logo">logo</h1>
      <ul className="nav__list">
        <li className="nav__item nav__item--active">home</li>
        <li className="nav__item">phones</li>
        <li className="nav__item">tablets</li>
        <li className="nav__item">accessories</li>
      </ul>
    </nav>
  );
};

export default Nav;
