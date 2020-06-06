import "./index.scss";

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";

const Breadcrumbs = () => {
  return (
    <div className={`breadcrumbs`}>
      <AiOutlineHome />
      <div className="breadcrumbs__icon">
        <BsChevronLeft />
      </div>
      <span className="breadcrumbs__link">Phones</span>
    </div>
  );
};

export default Breadcrumbs;
