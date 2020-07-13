import "./index.scss";

import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { useLocation, useHistory } from "react-router-dom";

const TopBar = () => {
  let history = useHistory();
  let location = useLocation();
  console.log(location);

  const setLocation = (url: string) => {
    history.push(url);
  };

  return (
    <div className={`top-bar`}>
      <div className="top-bar__item top-bar__item--search">
        <input
          type="text"
          placeholder="Search in phones..."
          className={`top-bar__input`}
        />
        <RiSearchLine className={`top-bar__item-icon`} />
      </div>
      <div className="top-bar__item">
        <AiOutlineHeart
          size={25}
          className={`top-bar__item-icon`}
          onClick={() => setLocation("/favourites")}
        />
      </div>
      <div className="top-bar__item">
        <FiShoppingBag
          size={25}
          className={`top-bar__item-icon`}
          onClick={() => setLocation("/cart")}
        />
      </div>
    </div>
  );
};

export default TopBar;
