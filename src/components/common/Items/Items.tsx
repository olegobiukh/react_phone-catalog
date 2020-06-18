import "./index.scss";

import React, { FC } from "react";
import classNames from "classnames";
import Item from "../Item";

interface Props {
  classes?: string;
}

const Items: FC<Props> = ({ classes }) => {
  const itemsClass = classNames({
    items: true,
    "items--catalog": classes === "catalog",
    "items--favourites": classes === "favourites",
  });

  return (
    <div className={itemsClass}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Items;
