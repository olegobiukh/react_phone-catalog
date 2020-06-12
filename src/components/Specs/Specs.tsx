import "./index.scss";

import React, { FC } from "react";
import Item from "./Item";
import uid from "uid";

interface Props {
  items: {
    [key: string]: string | number;
  };
  classes?: string;
}

const Specs: FC<Props> = ({ items, classes }) => {
  const newItems = Object.entries(items).map(([key, value]) => (
    <Item key={uid()} name={key} value={value} />
  ));

  return <ul className={`specs ${classes && classes}`}>{newItems}</ul>;
};

export default Specs;
