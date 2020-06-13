import "./index.scss";

import React, { FC } from "react";
import Item from "./Item";
import uid from "uid";
import classNames from "classnames";

interface Props {
  items: {
    [key: string]: string | number;
  };
  classes?: string;
}

const Specs: FC<Props> = ({ items, classes = "main" }) => {
  const specsClass = classNames({
    specs: true,
    "specs--options": classes === "options",
    "specs--tech": classes === "tech",
    "specs--others": classes === "main",
  });

  const newItems = Object.entries(items).map(([key, value]) => (
    <Item key={uid()} name={key} value={value} />
  ));

  return <ul className={specsClass}>{newItems}</ul>;
};

export default Specs;
