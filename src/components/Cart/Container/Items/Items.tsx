import "./index.scss";

import React from "react";
import Item from "./Item"

const Items = () => {
  return (
    <div className={`cart__items`}>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Items;
