import "./index.scss";

import React, { FC } from "react";

interface Props {
  text: string;
  isAdded?: boolean;
  // changeSlide: () => void;
}

const ButtonBlack: FC<Props> = ({ text, isAdded }) => {
  return (
    <button
      className={`button-black ${isAdded ? "button-black--added" : null}`}
    >
      {text}
    </button>
  );
};

export default ButtonBlack;
