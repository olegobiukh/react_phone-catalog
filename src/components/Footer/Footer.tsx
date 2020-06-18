import "./index.scss";

import React from "react";
import { BsChevronUp } from "react-icons/bs";
import Arrow from "../Arrow";

const Footer = () => {
  const backToTop = () => {};
  return (
    <footer className={`footer`}>
      <div className={`footer__container`}>
        <h1 className="nav__logo footer__logo">logo</h1>
        <ul className="footer__social">
          <li className="footer__social-item">github</li>
          <li className="footer__social-item">contacts</li>
          <li className="footer__social-item">rights</li>
        </ul>
        <div className="footer__right">
          <p className="footer__right-text">Back to top</p>
          <Arrow icon={<BsChevronUp />} handleClick={backToTop} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
