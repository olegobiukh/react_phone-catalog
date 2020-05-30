import "./index.scss";

import React from "react";

const Button = ({ renderProp, isDisables, changeSlide }) => {
  return (
    <button
      className={`slideshow__button ${
        isDisables ? "slideshow__button--disabled" : null
      }`}
      onClick={changeSlide}
      disabled={isDisables}
    >
      {renderProp}
    </button>
  );
};

export default Button;
