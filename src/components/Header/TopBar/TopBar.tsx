import "./index.scss";

import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className={`top-bar`}>
      <div className="top-bar__item">
        <AiOutlineHeart size={25} />
      </div>
      <div className="top-bar__item">
        <FiShoppingBag size={25} />
      </div>
    </div>
  );
};

export default TopBar;
