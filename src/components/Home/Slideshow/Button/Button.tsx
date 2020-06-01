import "./index.scss";

import React, {FC, ReactNode} from "react";

interface Props {
  renderProp: ReactNode;
  isDisables: boolean;
  changeSlide: () => void
}

const Button:FC<Props> = ({ renderProp, isDisables, changeSlide }) => {
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
