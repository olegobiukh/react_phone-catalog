import "./index.scss";

import React from "react";
import Select from "./Select";

const Toolbar = () => {
  return (
    <div className={`catalog-toolbar`}>
      <Select />
      <Select />
    </div>
  );
};

export default Toolbar;
