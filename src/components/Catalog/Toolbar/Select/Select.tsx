import "./index.scss";

import React from "react";
import uid from "uid";

const Select = () => {
  const options = ["Newest", "Oldest"];

  return (
    <div className={`catalog-select__wrapper`}>
      <div className="catalog-select__title">Sort by</div>
      <select className={`catalog-select`}>
        {options.map((item) => (
          <option key={uid()} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
