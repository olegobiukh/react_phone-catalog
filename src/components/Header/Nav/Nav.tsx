import "./index.scss";

import React from "react";
import uid from "uid";
import { useHistory, useLocation } from "react-router-dom";

const urls = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "phones",
    url: "/phones",
  },
  {
    title: "tablets",
    url: "/tablets",
  },
  {
    title: "accessories",
    url: "/accessories",
  },
];

const Nav = () => {
  let history = useHistory();
  let location = useLocation();
  console.log(location);

  const setLocation = (url: string) => {
    history.push(url);
  };

  return (
    <>
      <nav className={`nav`}>
        <h1 className="nav__logo">logo</h1>
        <ul className="nav__list">
          {urls.map((item) => (
            <li
              key={uid()}
              className={`nav__item ${
                location.pathname === item.url && "nav__item--active"
              }`}
              onClick={() => setLocation(item.url)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className={`nav__wrapper`} />
    </>
  );
};

export default Nav;
