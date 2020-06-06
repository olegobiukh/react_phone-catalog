import "./index.scss";

import React from "react";
import Items from "../Items";
import Pagination from "../Pagination";
import Toolbar from "../Toolbar";

const Container = () => {
  return (
    <div className={`catalog__container`}>
      <Toolbar />
      <Items />
      <Pagination />
    </div>
  );
};

export default Container;
