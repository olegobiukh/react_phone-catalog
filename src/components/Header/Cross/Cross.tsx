import "./index.scss";

import React, { FC } from "react";

interface Props {
  handleToggleNav: any;
}

const Cross: FC<Props> = ({ handleToggleNav }) => {
  return (
    <div className={`cross`} onClick={handleToggleNav}>
      <div className={`cross__line cross__line--1st`} />
      <div className={`cross__line cross__line--2nd`} />
    </div>
  );
};

export default Cross;
